export const formatNumber = (num:number) : number => {
  const n = num
    .toFixed(1)
    .toString()
    .replace('.0', '')

  return parseFloat(n)
}

export const truncate = (str:string, len:number) : string => {
  if (str.length > len) {
    return `${str.substring(0, len)}...`
  }
  return str
}

export const euro = (price:number) : string => {
  return `${price} €`
}

export const lorem = () : string => {
  return (
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus pariatur vero eligendi debitis voluptate iste harum cum, adipisci dolorem dolores quas, est, deleniti temporibus repellendus asperiores qui nam ratione.'
  )
}
