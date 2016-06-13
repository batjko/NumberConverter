const typeDefinitions = `
type Word {
  converted: String!
}

type RootQuery {
  converter(numToConvert: Int!): Word
}

schema {
  query: RootQuery
}
`
export default [typeDefinitions]
