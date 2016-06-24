# NumberConverter [![Known Vulnerabilities](https://snyk.io/test/github/batjko/NumberConverter/badge.svg)](https://snyk.io/test/github/batjko/NumberConverter)
Quick test to convert numeric values to English phrasing on the command line or via a GraphQL service.
We're using mocha and chai for basic test cases, and babel for ES6 sugar.
The conversion is done by the handy `number-to-words` package. ;)

## Install

1. Clone this repo
2. Install dependencies:
  `npm install`
3. Run tests (Mocha/Chai):
  `npm test`

## Usages

#### (Master) branch: Command Line  [![Build Status](https://travis-ci.org/batjko/NumberConverter.svg?branch=master)](https://travis-ci.org/batjko/NumberConverter)

Using npm script to return converted values
```bash
$ npm run convert [number]
```
...where [number] represents any number, e.g.:
```bash
$ npm run convert 123

one hundred twenty-three
```

#### (apollo-webversion) branch: GraphQL Server  [![Build Status](https://travis-ci.org/batjko/NumberConverter.svg?branch=apollo-webversion)](https://travis-ci.org/batjko/NumberConverter)

With one query available:
![GraphQL query example](./screenshots/gql.jpg)

Just switch to the following branch and start the server:
```bash
git checkout apollo-webversion
npm start
```
Then open your browser at [http://localhost:8080/graphql](http://localhost:8080/graphql), and use the query shown above to convert your numbers.
