import { addDoc, collection } from 'firebase/firestore';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { Shop } from '../../context/CartContext';
import { db } from '../../firebase/config';
import generateOrder from '../../utils/generateOrder';
import updateOrder from '../../utils/updateOrder';
import './styles.css';

const CartContainer = () => {

  const {cart, clearCart, cartResume, removeToCart} = useContext(Shop)

  const confirmarOrden = async () => {
    const order = generateOrder("Francisco", "Timez","Calle falsa 123", "3764121212","franciscotimez@gmail.com", cart, cartResume)
    console.log(order)

    // Update Stock order
    updateOrder(cart , order, clearCart)

    // // Create Order in firebase
    // const docRef = await addDoc(collection(db, "orders"), order)
    // console.log("Orden creada con ID: ", docRef.id)
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
            <button onClick={confirmarOrden}>Confirmar Compra</button>
          </div> :
          <div>
            <h3>El carrito esta vacio!!</h3>
            <Link to='/' >Go to Home!!!</Link>
          </div>
          }
        <div>
          <Link to='/orders' >Ordenes</Link>
        </div>
    </div>
  )
}

export default CartContainer