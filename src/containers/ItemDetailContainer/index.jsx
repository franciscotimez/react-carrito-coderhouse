import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null);

    const params = useParams()

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.error(error)
                // setError(error.message);
            }
        }
        getProducts()
    }, [params]);

  return (
    <div>
        {
        productDetail ?
        <ItemDetail product={productDetail}/> :
        <p>Cargando...</p>
    }
    </div>
  )
}

export default ItemDetailContainer