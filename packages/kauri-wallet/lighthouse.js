const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const appConfig = require('./package');
var fs = require('fs');

const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: './dist/kauri-wallet' });
})

server.listen(3388, () => {
  console.log('Running at http://localhost:3388');
});

const opts = {
  chromeFlags: ['--headless']
};

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      delete results.artifacts;
      return chrome.kill().then(() => results)
    });
  });
}

function done() {
  console.log('Wrote')
}

launchChromeAndRunLighthouse('http://localhost:3388', opts).then(results => {
  const finalScores = {
    averageScore: results.reportCategories.map(item => item.score).reduce((acc, curr) => acc + curr, 0) / results.reportCategories.length,
    catScores: results.reportCategories.map(item => ({ id: item.id, score: item.score })),
    failed: results.reportCategories.map(item => item.audits).reduce((acc, val) => acc.concat(val), []).filter(item => item.score < 100)
  }

  fs.writeFile('lighhouse-results.json', JSON.stringify(finalScores), 'utf8', () => console.log('lighhouse-results.json'));

  if (finalScores.averageScore < 100) {
    console.log(finalScores.failed)
    console.log(`Lighthouse average score was: ${finalScores.averageScore}`)
    console.log('Score is lower than 100. Fix issues to score 100.')
    console.log(finalScores.catScores)
    server.close()
    return 1
  }

  console.log(`Lighthouse average score was: ${finalScores.averageScore}`)
  server.close()

  return 0
});