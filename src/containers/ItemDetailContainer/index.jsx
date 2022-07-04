import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/4");
                const data = await response.json();
                setProductDetail(data, productDetail);
            } catch (error) {
                console.error(error)
                // setError(error.message);
            }
        }
        getProducts()
    }, []);
  return (
    <div>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer