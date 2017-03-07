import request from 'superagent'

export const UPDATE_PAGE = 'UPDATE_PAGE'

export default (pageId, newValues) => {
  return (dispatch) => {
    request
      .patch(`/admin/static_pages/${pageId}`)
      .send({
        static_page: newValues
      })

      .then((response) => {
        const data = JSON.parse(response.text)

        dispatch({
          type: UPDATE_PAGE,
          payload: data
        })
      })
      
      .catch((error) => {
        console.log(error.message)
      })
  }
}
