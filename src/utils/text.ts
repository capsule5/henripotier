export const truncate = (str:string, len:number) : string => {
  if (str.length > len) {
    return `${str.substring(0, len)}...`
  }
  return str
}

export const euro = (price:number) : string => {
  return `${price} €`
}
