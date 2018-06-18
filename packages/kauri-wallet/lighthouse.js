const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const appConfig = require('./package');

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

launchChromeAndRunLighthouse(appConfig.config.deployUrl, opts).then(results => {
  // console.log(`Lighthouse report results:\n${JSON.stringify(results)}`);
  if (results.reportCategories.filter((item) => item.id === "pwa").length) {
    const score = results.reportCategories.filter((item) => item.id === "pwa")[0].score
    // console.log(results.reportCategories[0]);
    // console.log(results.reportCategories[1]);
    // console.log(results.reportCategories[2]);

    // for (const category in results.reportCategories) {
    //   console.log(category);

    //   console.log(`${category.name}: ${category.score}`);
    // }

    if (score >= 100) {
      return 0;
    }
    console.error(`Score is lower than 100. It is ${score}`);
    return 1;
  }
  console.error(`No PWA score provided by lighthouse.`);
  return 1
});