/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

import { getRandomInt } from './math'

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ array[i], array[j] ] = [ array[j], array[i] ]
  }
  return array
}

export const getRandomSlice = (array, nb) => {
  const a = shuffle(array)
  const s = getRandomInt(a.length - 1 - nb)
  return array.slice(s, s + nb)
}

export const arrayMove = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr // for testing
}

export const getUnique = (arr, comp) => {
  // store the comparison values in array
  const unique = arr
    .map((e) => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}
export const uniq = (arr) => {
  return [ ...new Set(arr) ]
}


export const groupBy = (list, props) => {
  return list.reduce((a, b) => {
    (a[b[props]] = a[b[props]] || []).push(b)
    return a
  }, {})
}

export const chunk = (array, perChunk) => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

export const oMap = (o, f) => Object.assign({}, ...Object.keys(o).map((k) => ({ [k]: f(o[k]) })))

export const sortBy = (collection, by, dir = 'ASC') => {
  const sorted = collection.sort((a, b) => {
    return a[by] > b[by] ? 1 : b[by] > a[by] ? -1 : 0
  })

  return dir === 'DESC' ? sorted.reverse() : sorted
}
