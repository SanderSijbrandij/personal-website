import request from 'superagent'

export const GET_PAGES = 'GET_PAGES'
export const GET_PAGES_RECEIVED = 'GET_PAGES_RECEIVED'
export const GET_PAGES_ERROR = 'GET_PAGES_ERROR'

import setCurrentPage from '../actions/pages/set-current'

const pageService = store => dispatch => action => {
  // Pass all actions through by default
  dispatch(action)

  switch (action.type) {
    case GET_PAGES:
      let data = null

      request
        // Connect to the API
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
          dispatch(setCurrentPage(data, 'about'))
        })

      break

    default:
      break
  }
}

export default pageService
