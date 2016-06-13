"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefinitions = "\ntype Word {\n  converted: String!\n}\n\ntype RootQuery {\n  converter(numToConvert: Int!): Word\n}\n\nschema {\n  query: RootQuery\n}\n";
exports.default = [typeDefinitions];