import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="container">
      <ul>
          <li><a>Home</a></li>
          <li><a>Noticias</a></li>
          <li><a>Contacto</a></li>
          <li><a>Nosotros</a></li>
      </ul>
    </div>
  )
}
