const converter = require('number-to-words')

export default (num) => {
  return converter.toWords(num)
}
