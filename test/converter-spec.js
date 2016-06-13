import convert from '../converter.js'
import { expect } from 'chai'

describe('converter', () => {
  it('converts digits under 20', () => {
    const converted = [0, 1, 2, 4, 6, 8, 10, 13, 15, 19].map(n => convert(n))
    expect(converted).to.equal([
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five'
    ])
  })
})
