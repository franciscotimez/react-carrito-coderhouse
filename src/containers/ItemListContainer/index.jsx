import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import { ItemList } from '../../components/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState(null);

  const params = useParams();
  console.log(params)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products${params.categoryId ? `/category/${params.categoryId}`: ""}`)
        const data = await response.json();
        console.log(data);
        setProductos(data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [params]);

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito`)
  }

  return (
    <div>
        <h1 style={{backgroundColor: "whiteSmoke"}}>ItemListContainer</h1>
        {
          productos ?
          <ItemList items={productos} /> :
          <p>Cargado...</p>
        }
        <ItemCount stock={5} initial={0} onAddCart={handleAdd}/>
    </div>
  )
}

export default ItemListContainer