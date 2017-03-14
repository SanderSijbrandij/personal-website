import { GET_PROJECTS_RECEIVED } from '../actions/projects/fetch'
import { UPDATE_PROJECT } from '../../admin/actions/projects/update'
import { DESTROY_PROJECT } from '../../admin/actions/projects/destroy'
import { CREATE_PROJECT } from '../../admin/actions/projects/create'

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_PROJECTS_RECEIVED:
      return [].concat(payload)

    case UPDATE_PROJECT:
      return state.map((project) => {
        if (project.id == payload.id) {
          return Object.assign({}, payload)
        } else {
          return project
        }
      })

    case DESTROY_PROJECT:
      return state.filter((project) => {
        if (project.id == payload.id) return false
        return true
      })

    case CREATE_PROJECT:
      return [Object.assign({}, payload)].concat(state)

    default:
      return state
  }
}
