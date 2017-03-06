import FETCHED_PAGES from '../actions/pages/fetch'

export default (state = [], { type, payload }) => {
  switch(type) {
    case FETCHED_PAGES:
      return [].concat(payload)

    default:
      return state
  }
}
