import React from 'react';
import { ItemOrder } from '../ItemOrder';
import './styles.css';

const OrderItem = ({ item }) => {
  console.log(item);

  return (
    <div className="itemOrder">
      <h3>Orden ID: {item.id}</h3>
      <p>Fecha de compra: {item.createdAt}</p>
      <div>
        <h5>Items</h5>
        {
          item.items.map(item => {
            return <ItemOrder key={item.id} item={item}/>
          })
        }
        <p></p>
      </div>
      <div>
        <h5>Total</h5>
        <p>{item.total.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default OrderItem;