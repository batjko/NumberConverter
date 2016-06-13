import converter from './converter'

const resolveFunctions = {
  RootQuery: {
    converter (_, {numToConvert}) {
      return {
        converted: converter(numToConvert)
      }
    }
  }
}

export default resolveFunctions
