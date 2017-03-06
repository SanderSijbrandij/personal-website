import GET_PAGES_SUCCESS from '../middleware/api'

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_PAGES_SUCCESS:
      return [].concat(payload)

    default:
      return state
  }
}
