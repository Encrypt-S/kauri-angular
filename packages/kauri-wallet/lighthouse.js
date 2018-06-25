const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const path = require('path')
var fs = require('fs');

const express = require('express')
var compression = require('compression')

console.log('Started Lighthouse Audit');
const app = express()

const distDir = path.resolve(__dirname, 'dist/kauri-wallet')

app.use(compression())
app.use(express.static(distDir))


const server = app.listen(3388, () => console.log('Running prod server on http://localhost:3388'))

const opts = {
  chromeFlags: ['--headless'],
};

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    console.log('running lighthouse on', url, opts)
    return lighthouse(url, opts, config).then(results => {
      delete results.artifacts;
      return chrome.kill().then(() => results)
    }).catch(err => console.log);
  }).catch(err => console.log);
}

const lighthouseConfig = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: [
      'uses-http2', // Dont get server config
      'redirects-http', // Dont check server config
      'uses-long-cache-ttl', // Dont check server config
      'uses-request-compression', // Dont check server config
      'user-timings', // Optional, about add extra perf tests
    ]
  },
}

launchChromeAndRunLighthouse('http://localhost:3388', opts, lighthouseConfig).then(results => {
  const finalScores = {
    averageScore: results.reportCategories.map(item => item.score).reduce((acc, curr) => acc + curr, 0) / results.reportCategories.length,
    catScores: results.reportCategories.map(item => ({ id: item.id, score: item.score })),
    failed: results.reportCategories.map(item => item.audits) // Get all audit items
      .reduce((acc, val) => acc.concat(val), []) // flatten 2d array into a single array
      .filter(item => item.score < 100 && item.result.manual !== true && item.result.weight !== 0) // remove items that passed, and items that a manual checks
  }

  fs.writeFile(path.resolve(__dirname, 'lighthouse-results.json'), JSON.stringify(finalScores, null, 2), 'utf8', () => { });

  if (finalScores.averageScore < 98) {
    console.log(finalScores.failed)
    console.log(`Lighthouse average score was: ${finalScores.averageScore}`)
    console.log('Score is lower than 99. Fix issues to score 99.')
    console.log(finalScores.catScores)
    server.close()
    return 1
  }

  console.log('\n', '\x1b[33m', `Lighthouse average score was: ${finalScores.averageScore}`, '\x1b[0m', '\n')

  if (finalScores.averageScore !== 100) {
    console.log('Some audits did not reach 100%. See lighthouse-results.json for details')
  }

  server.close()

  return 0
}).catch(err => console.log);