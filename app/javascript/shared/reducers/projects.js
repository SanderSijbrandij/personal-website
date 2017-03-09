import { GET_PROJECTS_RECEIVED } from '../actions/projects/fetch'

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_PROJECTS_RECEIVED:
      return [].concat(payload)

    default:
      return state
  }
}
