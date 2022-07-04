import React, {useState, useEffect} from 'react'
import ItemCount from '../../components/ItemCount';
import { ItemList } from '../../components/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/mocks/productos.json')
        const data = await response.json();
        console.log(data);
        setProductos(data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito`)
  }

  return (
    <div>
        <h1 style={{backgroundColor: "whiteSmoke"}}>ItemListContainer</h1>
        {
          productos ? <ItemList items={productos} /> : null}
        <ItemCount stock={5} initial={0} onAddCart={handleAdd}/>
    </div>
  )
}

export default ItemListContainer