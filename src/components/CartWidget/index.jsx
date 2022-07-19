import React, { useContext } from 'react'
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from '../../context/CartContext';

const CartWidget = () => {
  const {cartResume} = useContext(Shop);

  return (
    <>
    { cartResume.itemsTotal > 0 && 
      <div>
        <HiShoppingCart size={"3rem"} style={{padding: "10px"}}/>
        <span style={{color: "white"}}>({cartResume.itemsTotal})</span>
      </div>
    }
    </>
  )
}

export default CartWidget