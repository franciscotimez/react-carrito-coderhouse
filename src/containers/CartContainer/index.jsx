import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { Shop } from '../../context/CartContext';
import './styles.css';

const CartContainer = () => {

  const {cart, cartResume, removeToCart} = useContext(Shop)

  console.log(cart)
  return (
    <div className="cartContainer">
        {
          cart.map(item => {
            return <CartItem key={item.id} item={item} onRemove={removeToCart}/>
          })
        }
        {
          cartResume.itemsTotal > 0 ?
          <div>
            <h3>Precio Total: {cartResume.precioTotal}</h3>
            <h3>Cantidad Items: {cartResume.itemsTotal}</h3>
          </div> :
          <div>
            <h3>El carrito esta vacio!!</h3>
            <Link to='/' >Go to Home!!!</Link>
          </div>
          }
    </div>
  )
}

export default CartContainer