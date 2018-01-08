const createPoetPath = (poet, url) => {
  return `${url}/${poet.firstName.toLowerCase()}_${poet.lastName.toLowerCase()}`
}

const createPoemsPath = (poem, url) => {
  return `${url}/${poem.title.toLowerCase().replace(/ /g, "_")}`
}

export { createPoetPath, createPoemsPath }
