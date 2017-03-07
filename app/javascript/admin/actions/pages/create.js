import request from 'superagent'

export const CREATE_PAGE = 'CREATE_PAGE'

export default (values) => {
  return (dispatch) => {
    request
      .post(`/admin/static_pages/`)
      .send({
        static_page: values
      })

      .then((response) => {
        const data = JSON.parse(response.text)

        dispatch({
          type: CREATE_PAGE,
          payload: data
        })
      })

      .catch((error) => {
        console.log(error.message)
      })
  }
}
