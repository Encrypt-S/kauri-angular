/*
  Because many crypto libs use crypto, global and some other builtin node modules
  we have to make sure we can use the browserify version during dev
  Angular disabled this in there webpack builds, this script fixes it for angular v6
  More details:
  https://gist.github.com/niespodd/1fa82da6f8c901d1c33d2fcbb762947d
  https://github.com/angular/angular-cli/issues/1548
 */
const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/node: false/g, 'node: node: { fs: \'empty\', global: true,  crypto: true, tls: \'empty\', net: \'empty\', process: true, module: false, clearImmediate: false, setImmediate: false }');

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
