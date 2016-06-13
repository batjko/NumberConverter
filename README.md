# NumberConverter
Quick test to convert numeric values to English phrasing on the command line.
This is using mocha and chai for basic test cases, and babel for ES6 sugar,
but otherwise it simply wraps the number-to-words package.

Execution is done via npm scripts on the command line.

## Install

1. Clone this repo
2. Install dependencies:
  `npm install`
3. Run tests (Mocha/Chai):
  `npm test`

## Usage

Command line:
```bash
$ npm run convert [number]
```
...where [number] represents any number, e.g.:
```bash
$ npm run convert 123

one hundred twenty-three
```
