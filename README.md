# Sqwk

A simple yet stunning interface for console input and output.

At its core Sqwk is a wrapper for [terminal-menu](https://www.npmjs.com/package/terminal-menu) but it provides a much more intuitive interface to provide consistent ease of use.

In the future Sqwk will same mirror the CLI interface to the browser so your application will have a simple GUI integrated with [NW.js](https://github.com/nwjs/nw.js) without any additional development. This will make your application instantly accessible to users wary of the command line.

## Features

- Intuitive interface
- Consist feedback

## Roadmap / Todo

The following features are planned for the 1.0.0 release:

- [ ] Browser interface
- [ ] [NW.js](https://github.com/nwjs/nw.js) integration

## Installation

Installation via [npm](https://www.npmjs.com/package/sqwk)

```
npm install --save sqwk
```

Or for the latest development release

```
npm install --save https://github.com/StudioLE/sqwk.git
```

## Usage

```js
sqwk = require('sqwk')

// Must be called before any sqwk.write()
sqwk.init({
  // Options
})

// Must be called at the end of your application
sqwk.end()
```
## Options

The following options can be passed as an object via 

```
sqwk.init({
  // Options
})
```

- `title` `(String)` Title
- `reset` `(Boolean)` Clear console before each write?
- `menu` `(Object)` Options passed to terminal-menu
- `formatTitle` `(function)` A function to format the title

## Documentation

### sqwk.init(options)

Set options and capture user input

#### Arguments

- `options` `(Object)` Options

### sqwk.write(message, options, callback)

Write a message or menu to the terminal

#### Arguments

- `message` `(String | Array)` Message or messages
- `options` `(Array)` Selectable menu options
- `callback` `(function)` Write a message or menu to the terminal

#### Returns

- `write` `(Object)` Terminal object

### sqwk.end(err, exit)

Close terminal and exit process

#### Arguments

- `err` `(Object)` Error
- `exit` `(Boolean)` Exit process?

## History

For changes refer to [CHANGELOG.md](https://github.com/StudioLE/sqwk/blob/master/CHANGELOG.js)

## Contributing

I'm always on the look out for collaborators so feel free to suggest new features, log an issue or just fork at will.
