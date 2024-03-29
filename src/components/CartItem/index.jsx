import React from 'react';
import { AiFillDelete } from "react-icons/ai";

import './styles.css';

const CartItem = ({ item, onRemove }) => {
  console.log("Hola cart item");
  console.log(item);

  return (
    <div className="itemCart">
      <div className="itemCartImg">
        <img src={item.image} alt={item.item} />
      </div>
      <div className="itemCartDescription">
        <h4>{item.title}</h4>
        <p>{item.description.substring(0, 200)}...</p>
      </div>
      <div className="itemCartResume">
        <div>
          <h5>Cantidad</h5>
          <p>{item.quantity}</p>
        </div>
        <div>
          <h5>Precio</h5>
          <p>{item.price}</p>
        </div>
        <div>
          <h5>Subtotal</h5>
          <p>{item.subTotal}</p>
        </div>
        <button className="btn buttonDelete" onClick={() => onRemove(item.id)}><AiFillDelete size={"2rem"} /></button>
      </div>
    </div>
  );
};

export default CartItem;