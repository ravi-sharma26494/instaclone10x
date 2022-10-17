import React from 'react'
import { Link } from "react-router-dom";
import Logo from './logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-wrapper white ">
          <Link to = "/"  className="brand-logo left">
            <img src ={Logo} alt="insta-logo" />
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to ="/login" ><i class="material-icons">local_see</i></Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar