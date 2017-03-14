import request from 'superagent'

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export default (projectId, newValues) => {
  return (dispatch) => {
    request
      .patch(`/admin/projects/${projectId}`)
      .send({
        project: newValues
      })

      .then((response) => {
        const data = JSON.parse(response.text)

        dispatch({
          type: UPDATE_PROJECT,
          payload: data
        })
      })

      .catch((error) => {
        console.log(error.message)
      })
  }
}
