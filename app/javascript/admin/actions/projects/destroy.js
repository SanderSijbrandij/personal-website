import request from 'superagent'

export const DESTROY_PROJECT = 'DESTROY_PROJECT'

export default (projectId) => {
  return (dispatch) => {
    request
      .delete(`/admin/projects/${projectId}`)

      .then((response) => {
        const data = JSON.parse(response.text)
        console.log(response)

        dispatch({
          type: DESTROY_PROJECT,
          payload: data
        })
      })

      .catch((error) => {
        console.log(error.message)
      })
  }
}
