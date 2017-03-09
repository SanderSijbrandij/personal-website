export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export default (projects, projectId) => {
  let currentProject = { }
  if (projectId === null) {
    return {
      type: SET_CURRENT_PROJECT,
      payload: { id: null }
    }
  }

  if (!!projectId) {
    currentProject = projects.filter((project) => {
      if (project.id == projectId) return true
      return false
    })[0]
  } else {
    currentProject = { id: null }
  }

  return {
    type: SET_CURRENT_PROJECT,
    payload: currentProject
  }
}
