'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _converter2 = require('./converter');

var _converter3 = _interopRequireDefault(_converter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolveFunctions = {
  RootQuery: {
    converter: function converter(_, _ref) {
      var numToConvert = _ref.numToConvert;

      return {
        converted: (0, _converter3.default)(numToConvert)
      };
    }
  }
};

exports.default = resolveFunctions;