import request from 'superagent'

export const CREATE_PROJECT = 'CREATE_PROJECT'

export default (values) => {
  return (dispatch) => {
    request
      .post(`/admin/projects/`)
      .send({
        project: values
      })

      .then((response) => {
        const data = JSON.parse(response.text)

        dispatch({
          type: CREATE_PROJECT,
          payload: data
        })
      })

      .catch((error) => {
        console.log(error.message)
      })
  }
}
