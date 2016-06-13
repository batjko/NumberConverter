import express from 'express'
import { apolloServer } from 'apollo-server'
import Schema from './schema'
import Resolver from './resolver'

const GRAPHQL_PORT = 8080

var graphQLServer = express()
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolver
}))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
))
