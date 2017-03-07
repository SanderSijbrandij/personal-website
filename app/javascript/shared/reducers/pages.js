import { GET_PAGES_RECEIVED } from '../middleware/api'

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_PAGES_RECEIVED:
      return [].concat(payload)

    default:
      return state
  }
}
