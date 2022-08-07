import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { CheckoutModal } from '../../components/CheckoutModal';
import { Shop } from '../../context/CartContext';

import './styles.css';

const CartContainer = () => {

  const {cart, clearCart, cartResume, removeToCart} = useContext(Shop)

  const [openModal, setOpenModal] = useState(false);

  const confirmarOrden = () => {
    setOpenModal(true);
  }
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
            <button className="btn buttonConfirm" onClick={confirmarOrden}>Confirmar Compra</button>
          </div> :
          <div>
            <h3>El carrito esta vacio!!</h3>
            <Link to='/' >Go to Home!!!</Link>
          </div>
          }
        <CheckoutModal isOpen={ openModal } setOpen={ setOpenModal }/>
    </div>
  )
}

export default CartContainer