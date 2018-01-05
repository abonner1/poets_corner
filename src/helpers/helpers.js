const createPath = (poet, url) => {
  return `${url}/${poet.firstName.toLowerCase()}_${poet.lastName.toLowerCase()}`
}

export { createPath }
