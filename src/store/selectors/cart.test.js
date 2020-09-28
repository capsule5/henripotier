import {
  getIsbns, getItemsFmt, getTotal, getBestOffer, getTotalAfterDiscount,
} from 'Store/selectors/cart'
import { euro } from 'Src/utils/text'

const cartState = {
  items: [
    { isbn: 'aa', price: 10 },
    { isbn: 'aa', price: 10 },
    { isbn: 'bb', price: 15 },
  ],
}

describe('getIsbns', () => {
  it('returns isbns string', () => {
    expect(getIsbns(cartState)).toEqual('aa,aa,bb')
  })
})

describe('getItemsFmt', () => {
  it('returns items + qty, subtotal, subtotalFmt ', () => {
    const expected = [
      {
        isbn: 'aa', price: 10, qty: 2, subtotal: 20, subtotalFmt: euro(20),
      },
      {
        isbn: 'bb', price: 15, qty: 1, subtotal: 15, subtotalFmt: euro(15),
      },
    ]
    expect(getItemsFmt(cartState)).toEqual(expected)
  })
})

describe('getTotal', () => {
  it('returns cart total', () => {
    const expected = { total: 35, totalFmt: euro(35) }
    expect(getTotal(cartState)).toEqual(expected)
  })
})

describe('getBestOffer', () => {
  it('returns the percentage offer', () => {
    const cartStateWithOffers = {
      ...cartState,
      offers: [ { type: 'percentage', value: 4 } ],
    }
    const expected = { type: 'percentage', value: 4, discountFmt: `- ${euro(4)}` }
    expect(getBestOffer(cartStateWithOffers)).toEqual(expected)
  })

  it('returns the minus offer', () => {
    const cartStateWithOffers = {
      ...cartState,
      offers: [
        { type: 'percentage', value: 4 },
        { type: 'minus', value: 15 },
        { type: 'slice', sliceValue: 100, value: 12 },
      ],
    }
    const expected = { type: 'minus', value: 15, discountFmt: `- ${euro(15)}` }
    expect(getBestOffer(cartStateWithOffers)).toEqual(expected)
  })
  
  it('returns the slice offer', () => {
    const cartStateWithOffers = {
      items: [
        { isbn: 'aa', price: 100 },
        { isbn: 'aa', price: 100 },
        { isbn: 'bb', price: 15 },
      ],
      offers: [
        { type: 'percentage', value: 4 },
        { type: 'minus', value: 15 },
        { type: 'slice', sliceValue: 100, value: 12 },
      ],
    }
    const expected = { type: 'sliceOfferCalculated', value: 24, discountFmt: `- ${euro(24)}` }
    expect(getBestOffer(cartStateWithOffers)).toEqual(expected)
  })
})

describe('getTotalAfterDiscount', () => {
  it('returns cart total after discount', () => {
    const cartStateWithOffers = {
      ...cartState,
      offers: [
        { type: 'percentage', value: 4 },
        { type: 'minus', value: 15 },
        { type: 'slice', sliceValue: 100, value: 12 },
      ],
    }
    // total = 35, best offer (minus) = 15, total after discount = 20
    const expected = { totalAD: 20, totalADFmt: euro(20) }
    expect(getTotalAfterDiscount(cartStateWithOffers)).toEqual(expected)
  })
})
