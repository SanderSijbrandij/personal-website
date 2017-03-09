import request from 'superagent'

export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_PROJECTS_RECEIVED = 'GET_PROJECTS_RECEIVED'
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR'

export default () => {
  return (dispatch) => {
    let data = null

    // API request
    request
      .get('/projects')

      // Success
      .then((response) => {
        data = JSON.parse(response.text)

        dispatch({
          type: GET_PROJECTS_RECEIVED,
          payload: data
        })
      })

      // Error
      .catch((error) => {
        dispatch({
          type: GET_PROJECTS_ERROR,
          payload: error
        })
      })
  }
}
