import React from 'react'
import './main.css'

const ItemDetail = ({product}) => {
    const {title, description, price, image} = product
    console.log(product)
  return (
    <div className="ItemDetail">
        <h1>{title}</h1>
        <img src={image} alt={description}/>
        <p>{description}</p>
        <h2>Price: {price}$</h2>
    </div>
  )
}

export default ItemDetail