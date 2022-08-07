import React from 'react'
import './styles.css'

export const ItemOrder = ({item}) => {
  return (
    <div className="itemOrderBuyed">
      <p>{item.title}</p>
      <p>{item.quantity}</p>
      <p>{item.price.toFixed(2)}$</p>
    </div>
  )
}
