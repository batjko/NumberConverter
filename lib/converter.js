'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var converter = require('number-to-words');

exports.default = function (num) {
  return converter.toWords(num);
};