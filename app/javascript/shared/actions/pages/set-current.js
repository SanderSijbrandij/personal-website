export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export default (pages, link) => {
  let currentPage = { }
  if (!!link) {
    currentPage = pages.filter((page) => {
      if (page.link == link) return true
      return false
    })[0]
  } else {
    currentPage = { link: null, title: null, content: null }
  }

  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  }
}
