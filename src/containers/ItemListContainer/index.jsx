import { collection, getDocs, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList';
import { db } from '../../firebase/config';
// import loadCollections from '../../firebase/loadCollections';
import './styles.css';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [productosFiltered, setProductosFiltered] = useState([]);

  const params = useParams();
  console.log(params)

  useEffect(() => {
    (async () => {
      try {
        // loadCollections() // EJECUTAR UNA SOLA VEZ!!!!!!
        const q = query(collection(db, 'products'))
        const querySnap = await getDocs(q)
        const data = []
        querySnap.forEach((doc) => {
          data.push({id: doc.id, ...doc.data()})
        })

        // const response = await fetch(`https://fakestoreapi.com/products`)
        // const data = await response.json();
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

  return (
    <div className="listContainer">
          {
            productosFiltered ?
            <ItemList items={productosFiltered} /> :
            <p>Cargado...</p>
          }
    </div>
  )
}

export default ItemListContainer