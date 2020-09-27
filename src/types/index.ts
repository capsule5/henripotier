export interface Book {
  isbn: string,
  title: string,
  cover:string,
  price:number,
  synopsis:string[],
  priceFmt:string,
  synopsisShort:string
}

export interface Item {
  isbn: string,
  title: string,
  cover:string,
  price:number,
  qty:number,
  subtotal:number,
  subtotalFmt:string
}
