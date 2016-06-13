import convert from '../src/converter'
import { expect } from 'chai'

describe('converter', () => {
  it('converts digits under 20', () => {
    expect(convert(0)).to.equal('zero')
    expect(convert(1)).to.equal('one')
    expect(convert(10)).to.equal('ten')
    expect(convert(19)).to.equal('nineteen')
  })

  it('converts digits between 20 and 99', () => {
    expect(convert(1)).to.equal('one')
    expect(convert(19)).to.equal('nineteen')
    expect(convert(8)).to.equal('eight')

  })

  it('converts digits between 100 and 999', () => {
    expect(convert(100)).to.equal('one hundred')
    expect(convert(368)).to.equal('three hundred sixty-eight')
    expect(convert(999)).to.equal('nine hundred ninety-nine')
  })
})
