import { createSelector } from 'reselect'
import { euro } from 'Src/utils/text'
import { sortBy } from 'Src/utils/array'

const itemsSelector = (state) => state.items
const offersSelector = (state) => state.offers

export const getIsbns = createSelector(
  itemsSelector,
  (items) => {
    return items.map(({ isbn }) => isbn).join()
  },
)

export const getItemsFmt = createSelector(
  itemsSelector,
  (items) => {
    const itemsByIsbn = items.reduce((acc, cur) => {
      const qty = acc[cur.isbn] ? acc[cur.isbn].qty + 1 : 1
      const subtotal = qty * cur.price
      const subtotalFmt = euro(subtotal)
      acc[cur.isbn] = {
        ...cur,
        qty,
        subtotal,
        subtotalFmt,
      }
      return acc
    }, {})
    return Object.values(itemsByIsbn)
  },
)

export const getTotal = createSelector(
  getItemsFmt,
  (items) => {
    const total = items.reduce((acc, cur) => {
      return acc + cur.subtotal
    }, 0)
    const totalFmt = euro(total)
    return { total, totalFmt }
  },
)

export const getBestOffer = createSelector(
  [ offersSelector, getTotal ],
  (offers, { total }) => {
    if (!offers.length) return { value: 0, discountFmt: '...' }

    const sortedOffers = sortBy([ ...offers ], 'value', 'DESC')
    const sliceOffer = offers.find(({ type }) => type === 'slice')
    let bestOffer = sortedOffers[0]

    if (sliceOffer) {
      const { sliceValue, value } = sliceOffer
      const sliceDiscountValue = Math.floor(total / sliceValue) * value
      const sliceOfferCalculated = { type: 'sliceOfferCalculated', value: sliceDiscountValue }
      bestOffer = sliceOfferCalculated.value > sortedOffers[0].value ? sliceOfferCalculated : sortedOffers[0]
    }

    return {
      ...bestOffer,
      value: bestOffer.value || 0,
      discountFmt: `- ${euro(bestOffer.value)}`,
    }
  },
)

export const getTotalAfterDiscount = createSelector(
  [ getTotal, getBestOffer ],
  (totalObj, bestOfferObj) => {
    const totalAD = totalObj.total - bestOfferObj.value
    const totalADFmt = euro(totalAD)
    return { totalAD, totalADFmt }
  },
)
