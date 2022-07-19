import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null);
    
    const navidateTo = useNavigate();

    const params = useParams()

    useEffect(() => {
        const getProducts = async () => {
            try {
                // Llamo a la referencia del Documento
                const docRef = doc(db, "products", params.productId)
                const docSnap = await getDoc(docRef)

                if(docSnap.exists()){
                    setProductDetail({id: docSnap.id, ...docSnap.data()});
                } else {
                    console.log("Document not found")
                    navidateTo('/notFound')
                }
                // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                // const data = await response.json();
                // setProductDetail(data);
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