import React from 'react'

export const Item = ({data}) => {
    // {id, title, price, pictureUrl}
  return (
    <div>
        <h2>{data.title}</h2>
        <h3>Precio: {data.price}</h3>
        <p>[Esto seria una imagen: {data.pictureUrl}]</p>
    </div>
  )
}
