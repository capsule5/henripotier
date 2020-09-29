import axios from 'axios'

export const callApi = ({
  method, endpoint, data = {}, config = {},
}) => {
  return axios({
    url: `${process.env.REACT_APP_API_ROOT}/${endpoint}`,
    method,
    data,
    headers: {},
    ...config,
  })
    .then((response) => {
      // console.log('API success', method, endpoint, response)
      return { response }
    })
    .catch((error) => {
      // TODO error handling on FAILURE
      // console.log({ error })
      console.error('API error', method, endpoint, error)
      
      return { error }
    })
}
