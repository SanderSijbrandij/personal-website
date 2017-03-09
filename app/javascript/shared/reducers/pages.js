import { GET_PAGES_RECEIVED } from '../actions/pages/fetch'
import { UPDATE_PAGE } from '../../admin/actions/pages/update'
import { DESTROY_PAGE } from '../../admin/actions/pages/destroy'
import { CREATE_PAGE } from '../../admin/actions/pages/create'

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

    case DESTROY_PAGE:
      return state.filter((page) => {
        if (page.link == payload.link) return false
        return true
      })

    case CREATE_PAGE:
      return [Object.assign({}, payload)].concat(state)

    default:
      return state
  }
}
