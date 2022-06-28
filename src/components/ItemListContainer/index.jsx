import React from 'react'
import ItemCount from '../ItemCount';

const ItemListContainer = () => {

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito`)
  }

  return (
    <div>
        <h1 style={{backgroundColor: "whiteSmoke"}}>ItemListContainer</h1>
        <ItemCount stock={5} initial={0} onAddCart={handleAdd}/>
    </div>
  )
}

export default ItemListContainer