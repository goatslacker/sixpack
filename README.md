# sixpack

> Package your ES6 files for use with other node programs or the browser

## Usage

`bin/sixpack myfile.js MyFile`

The first parameter is the file name that will be transpiled, the second parameter is the module name that will be exported
for use with node or the browser. This second parameter is passed to browserify as the 'standalone' option. Read more about [standalone](https://github.com/substack/node-browserify).

## License

MIT
