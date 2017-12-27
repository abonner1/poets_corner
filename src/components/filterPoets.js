import React from 'react'

const FilterPoets = () => (
  <form>
    <label htmlFor="filter">Filter by Poet: </label>
    <input type="text" id="filter" />
    <button type="submit">Filter</button>
  </form>
)

export default FilterPoets
