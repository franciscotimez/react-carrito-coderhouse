import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import OrderItem from '../../components/OrderItem';
import { db } from '../../firebase/config';
import './styles.css';

const OrdersContainer = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // loadCollections() // EJECUTAR UNA SOLA VEZ!!!!!!
        const q = query(collection(db, 'orders'), orderBy("createdAt", "desc"));
        const querySnap = await getDocs(q);
        const data = [];
        querySnap.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        // const response = await fetch(`https://fakestoreapi.com/products`)
        // const data = await response.json();
        setOrders(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="orderContainer">
      {
        orders.length > 0 ?
        orders.map(item => {
          return <OrderItem key={item.id} item={item} />;
        })
        :
        <h1>No Hay Ordenes Generadas.</h1>
      }
    </div>
  );
};

export default OrdersContainer;