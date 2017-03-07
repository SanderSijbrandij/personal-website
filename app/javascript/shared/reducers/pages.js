import { GET_PAGES_RECEIVED } from '../middleware/api'
import { UPDATE_PAGE } from '../../admin/actions/pages/update'

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_PAGES_RECEIVED:
      return [].concat(payload)

    case UPDATE_PAGE:
      return state.map((page) => {
        if (page.link == payload.link) {
          return Object.assign({}, payload)
        } else {
          return page
        }
      })

    default:
      return state
  }
}
