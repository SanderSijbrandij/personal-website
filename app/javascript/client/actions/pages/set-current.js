export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export default (pages, link) => {
  const currentPage = pages.filter((page) => {
    if (page.link == link) return true
    return false
  })[0]

  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  }
}
