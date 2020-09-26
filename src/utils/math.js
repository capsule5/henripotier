/* eslint-disable no-restricted-properties */
export const getRandom = (max, min = 0) => {
  return Math.random() * (max - min) + min
}

export const getRandomInt = (max, min = 0) => {
  return Math.floor(getRandom(max, min))
}

export const polarToCartesian = ({ perc, halfsize, radius }) => {
  const deg = (360 * perc) / 100
  const rad = (deg * Math.PI) / 180
  const x = halfsize + radius * Math.cos(rad)
  const y = halfsize + radius * Math.sin(rad)
  return { x, y }
}

// export const getDiffPerc = (val1, val2) => {
//   const absDiff = Math.abs(val1 - val2)
//   const average = (val1 + val2) / 2
//   return absDiff / average * 100
// }

export const getDiffPerc = (val1, val2) => {
  const max = Math.max(val1, val2)
  const min = Math.min(val1, val2)
  return 100 - (min / max * 100)
}

export const toFixedNumber = (num, digits, base) => {
  const pow = Math.pow(base || 10, digits)
  return Math.round(num * pow) / pow
}
