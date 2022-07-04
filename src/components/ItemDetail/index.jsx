import React from 'react'
import './main.css'

const ItemDetail = ({product}) => {
    const {title, description, price, image} = product
    console.log(product)
  return (
    <div className="ItemDetail">
        <h1>{title}</h1>
        <img src={image}/>
        <p>{description}</p>
        <h2>{price}$</h2>
    </div>
  )
}

export default ItemDetail