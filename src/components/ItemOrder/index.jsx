import React from 'react'
import './styles.css'

export const ItemOrder = ({item}) => {
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.quantity}</p>
      <p>{item.price}</p>
    </div>
  )
}
