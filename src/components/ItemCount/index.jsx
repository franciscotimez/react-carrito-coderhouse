import React from 'react'

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
    <div>
        <p>Stock: {stock}</p>
        <button onClick={onAdd} disabled={addButtonDisable}>+</button>
        <p>{count}</p>
        <button onClick={onSub} disabled={subButtonDisable}>-</button>
        <br/>
        <button onClick={() => onAddCart(count)}>Add to Cart</button>

    </div>
  )
}

export default ItemCount