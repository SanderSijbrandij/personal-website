import request from 'superagent'
import setCurrentPage from './set-current'

export const GET_PAGES = 'GET_PAGES'
export const GET_PAGES_RECEIVED = 'GET_PAGES_RECEIVED'
export const GET_PAGES_ERROR = 'GET_PAGES_ERROR'

export default () => {
  return (dispatch) => {
    let data = null

    // API request
    request
      .get('/static_pages')

      // Success
      .then((response) => {
        data = JSON.parse(response.text)

        dispatch({
          type: GET_PAGES_RECEIVED,
          payload: data
        })
      })

      // Error
      .catch((error) => {
        dispatch({
          type: GET_PAGES_ERROR,
          payload: error
        })
      })

      // for now, we'll assume no errors :]
      .then(() => {
        dispatch(setCurrentPage(data, 'projects'))
      })
  }
}
