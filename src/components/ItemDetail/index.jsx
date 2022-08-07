import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import './main.css';

const ItemDetail = ({ product }) => {

  const { addToCart } = useContext(Shop);
  const { title, description, price, image, stock } = product;
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const handleAdd = (qty) => {
    setQuantity(qty);
  };

  const handleTerminate = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="ItemDetail">
      <h1>{title}</h1>
      <img src={image} alt={description} />
      <p>{description}</p>
      <div className="priceBox">
        <h2>Precio: {price}$</h2>
        {!quantity ?
          <ItemCount stock={stock} initial={quantity} onAddCart={handleAdd} />
          :
          <button className="btn btnTerminate" onClick={handleTerminate}>Terminar Compra</button>
        }
      </div>
    </div>
  );
};

export default ItemDetail;