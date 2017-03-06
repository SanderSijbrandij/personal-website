import { SET_CURRENT_PAGE } from '../actions/pages/set-current'

export default (state = {}, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_PAGE:
      return Object.assign({}, payload)

    default:
      return state
  }
}
