import React from 'react'
import CartWidget from '../CartWidget';
import './style.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="container">
      <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to="/category/electronics" >Electronicos</Link></li>
          <li><Link to="/category/jewelery" >Joyeria</Link></li>
          <li><Link to="/category/men's clothing" >Ropa de Hombre</Link></li>
          <li><Link to="/category/women's clothing" >Ropa de Mujer</Link></li>
          <li><Link to='/orders' >Ordenes</Link></li>
          <li><Link to='/cart' className='cartWidget' ><CartWidget /></Link></li>
      </ul>
    </div>
  )
}
export default NavBar