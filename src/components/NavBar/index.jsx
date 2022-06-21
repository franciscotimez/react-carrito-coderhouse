import React from 'react'
import CartWidget from '../CartWidget';
import './style.css'


const NavBar = () => {
  return (
    <div className="container">
      <ul>
          <li><a>Home</a></li>
          <li><a>Noticias</a></li>
          <li><a>Contacto</a></li>
          <li><a>Nosotros</a></li>
          <li><CartWidget /></li>
      </ul>
    </div>
  )
}

export default NavBar