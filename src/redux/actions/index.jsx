export const addWorksAction = (title) => {
    return { type: 'ADD_WORKS', title }
  }

export const removeWorksAction = (works) => {
    return { type: 'REMOVE_WORKS', works }
}