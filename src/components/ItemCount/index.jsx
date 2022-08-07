import React from 'react'
import './style.css'

const ItemCount = ({stock, initial, onAddCart}) => {
  const [count, setCount] = React.useState(initial);
  const [addButtonDisable, setAddButtonDisable] = React.useState(initial < stock ? false : true);
  const [subButtonDisable, setSubButtonDisable] = React.useState(initial > 0 ? false : true);

  const onAdd = () => {
    let newCount = count + 1
    if(newCount <= stock) {
      setCount(newCount)
      setSubButtonDisable(false)
    }
    if( newCount === stock ) {
      setAddButtonDisable(true)
    }
  }

  const onSub = () => {
    let newCount = count - 1
    if(newCount >= 0) {
      setCount(newCount)
      setAddButtonDisable(false)
    }
    if(newCount === 0) {
      setSubButtonDisable(true)
    }
  }

  return (
    <div className="itemCountContainer">
        <button className="btn buttonAddSub" onClick={onSub} disabled={subButtonDisable}>- 1</button>
        <span>{count}</span>
        <button className="btn buttonAddSub" onClick={onAdd} disabled={addButtonDisable}>+ 1</button>
        <button className="btn buttonAddToCart" onClick={() => onAddCart(count)}>Add to Cart</button>
    </div>
  )
}

export default ItemCount