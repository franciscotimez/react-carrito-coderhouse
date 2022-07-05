import React from 'react'
import CartWidget from '../CartWidget';
import './style.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="container">
      <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to="/category/jewelery" >jewelery</Link></li>
          <li><Link to="/category/men's clothing" >men's clothing</Link></li>
          <li><CartWidget /></li>
      </ul>
    </div>
  )
}
export default NavBar