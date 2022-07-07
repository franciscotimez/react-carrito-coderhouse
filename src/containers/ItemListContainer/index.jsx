import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from '../../components/ItemCount';
import { ItemList } from '../../components/ItemList';
import './styles.css';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [productosFiltered, setProductosFiltered] = useState([]);

  const params = useParams();
  console.log(params)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json();
        console.log(data)
        setProductos(data)
        setProductosFiltered(data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  useEffect(() => {
    if( params?.categoryId ) {
      const filtered = productos.filter( producto => producto.category === params.categoryId)
      setProductosFiltered(filtered)
    }
    else {
      setProductosFiltered(productos)
    }
  }, [params, productos]);

  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito`)
  }

  return (
    <div className="listContainer">
          {
            productosFiltered ?
            <ItemList items={productosFiltered} /> :
            <p>Cargado...</p>
          }
        <ItemCount stock={5} initial={0} onAddCart={handleAdd}/>
    </div>
  )
}

export default ItemListContainer