var browserify = require('browserify')
var derequire = require('derequire')
var to5ify = require('6to5ify')

module.exports = function () {
  if (process.argv.length < 4) {
    throw new TypeError('sixpack expects a filename and a module name to export')
  }
  browserify({ entries: process.argv[2], standalone: process.argv[3] })
    .transform(to5ify)
    .bundle(function (err, bf) {
      if (err) {
        throw err
      }

      var code = String(bf)
      console.log(derequire(code))
    })
}
