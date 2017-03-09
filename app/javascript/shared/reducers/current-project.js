import { SET_CURRENT_PROJECT } from '../../admin/actions/projects/set-current'

export default (state = {}, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_PROJECT:
      return Object.assign({}, payload)

    default:
      return state
  }
}
