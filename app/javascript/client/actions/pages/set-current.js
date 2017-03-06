export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export default (pages, link) => {
  const currentPage = pages.filter((page) => {
    if (page.link !== link) return false
    return true
  })

  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  }
}
