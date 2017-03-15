export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export default (projects, projectId) => {
  let currentProject = { }
  if (projectId === null) {
    return {
      type: SET_CURRENT_PROJECT,
      payload: { title: null }
    }
  }

  if (!!projectId) {
    currentProject = projects.filter((project) => {
      if (project.title == projectId) return true
      return false
    })[0]
  } else {
    currentProject = { title: null }
  }

  return {
    type: SET_CURRENT_PROJECT,
    payload: currentProject
  }
}
