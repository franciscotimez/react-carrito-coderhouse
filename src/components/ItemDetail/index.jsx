import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import './main.css'

const ItemDetail = ({product}) => {
  
  const {addToCart} = useContext(Shop);
    const {title, description, price, image} = product
    const stock = 10
    const [quantity, setQuantity] = useState(null);

    const navigate = useNavigate()

    const handleAdd = (qty) => {
      setQuantity(qty)
    }

    const handleTerminate = () => {
      addToCart(product, quantity)
      navigate('/cart')
    }

  return (
    <div className="ItemDetail">
        <h1>{title}</h1>
        <img src={image} alt={description}/>
        <p>{description}</p>
        <h2>Price: {price}$</h2>
        { !quantity ?
        <ItemCount stock={stock} initial={quantity} onAddCart={handleAdd}/>
        :
        <button onClick={handleTerminate}>Terminar Compra</button>
         }
    </div>
  )
}

export default ItemDetail