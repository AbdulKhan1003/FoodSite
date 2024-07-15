import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const user = {name: 'Abdul Khan'}
    const cart = {TotalItems: 10}
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light border-1 border-bottom border-danger">
  <div className="container-fluid d-flex">
    <Link className="navbar-brand" to="/">ORDER UP! </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown float-end">
          <Link style={{color:"black"}}className="nav-link dropdown-toggle userName" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.name}
           </Link>
          <ul className="dropdown-menu linkClass" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item linkClass" to="/">Profile</Link></li>
            <hr className="dropdown-divider" /> 
            <li><Link className="dropdown-item linkClass" to="/">Orders</Link></li>
            <hr className="dropdown-divider" />
            <li><Link className="dropdown-item linkClass" to="/">Logout</Link></li>
          </ul>
        </li>
        <li className="nav-itemfloat-end me-3">
        <Link to="/cart" className=" btn position-relative"> <img src="images/cart-logo.png" alt="Cart" />
  <span className="position-absolute top-0 start-90 badge rounded-pill bg-danger">
    {cart.TotalItems}
  </span>
</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
