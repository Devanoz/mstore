import React from 'react'

export default function Search() {
  return (
    <div className="container my-3">
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search for product" aria-label="Search"></input>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  )
}
