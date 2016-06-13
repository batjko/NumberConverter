'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServer = require('apollo-server');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHQL_PORT = 8080;

var graphQLServer = (0, _express2.default)();
graphQLServer.use('/graphql', (0, _apolloServer.apolloServer)({
  graphiql: true,
  pretty: true,
  schema: _schema2.default,
  resolvers: _resolver2.default
}));
graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT + '/graphql');
});