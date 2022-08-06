import React, { useContext } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from '../../context/CartContext';
import "./style.css";

const CartWidget = () => {
  const { cartResume } = useContext(Shop);

  return (
    <>
      {cartResume.itemsTotal >= 0 &&
        <div className='widgetItemCount'>{cartResume.itemsTotal}</div>
      }
      <HiShoppingCart size={"3rem"} />
    </>
  );
};

export default CartWidget;