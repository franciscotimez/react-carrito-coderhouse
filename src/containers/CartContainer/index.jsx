import React, { useContext } from 'react'
import { Shop } from '../../context/CartContext';

const CartContainer = () => {

  const {cart} = useContext(Shop)

  console.log(cart)
  return (
    <div>
      <ul>
        {
          cart.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default CartContainer