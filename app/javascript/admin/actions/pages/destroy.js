import request from 'superagent'

export const DESTROY_PAGE = 'DESTROY_PAGE'

export default (pageId) => {
  return (dispatch) => {
    request
      .delete(`/admin/static_pages/${pageId}`)

      .then((response) => {
        const data = JSON.parse(response.text)
        console.log(response)

        dispatch({
          type: DESTROY_PAGE,
          payload: data
        })
      })

      .catch((error) => {
        console.log(error.message)
      })
  }
}
