import { SET_CURRENT_PAGE } from '../actions/pages/set-current'
import { UPDATE_PAGE } from '../../admin/actions/pages/update'
import { DESTROY_PAGE } from '../../admin/actions/pages/destroy'

export default (state = {}, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_PAGE:
      return Object.assign({}, payload)

    case UPDATE_PAGE:
      if (payload.link == state.link) {
        return Object.assign({}, payload)
      } else {
        return state
      }

    case DESTROY_PAGE:
      if (payload.link == state.link) {
        return {}
      } else {
        return state
      }

    default:
      return state
  }
}
