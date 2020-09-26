import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export const today = () => {
  return dayjs().format('DD/MM/YYYY')
}

export const dateDB = (date) => {
  return dayjs(date, 'DD/MM/YYYY').format('YYYYMMDD')
}

export const dateFront = (date) => {
  return dayjs(String(date), 'YYYYMMDD').format('DD/MM/YYYY')
}
