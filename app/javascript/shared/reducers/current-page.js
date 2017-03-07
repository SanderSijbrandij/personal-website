import { SET_CURRENT_PAGE } from '../actions/pages/set-current'
import { PAGE_UPDATED } from '../../admin/actions/pages/update'

export default (state = {}, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_PAGE:
      return Object.assign({}, payload)

    case PAGE_UPDATED:
      if (payload.link == state.link) {
        return Object.assign({}, payload)
      } else {
        return state
      }

    default:
      return state
  }
}
