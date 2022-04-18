import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';



// import component

//testing commit header




export default function Header(props) {

    const [click, setClick] = useState (false);
    const handleClick = () => setClick (!click);

    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/">
              Home
          </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/">
              Product
          </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/">
              About
          </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/">
              Contacts
          </Link>

        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

Header.defaultProps = {
    tittle: 'Task tracker'
}











