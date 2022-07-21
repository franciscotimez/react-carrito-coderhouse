import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";


const loadCollections = async () => {
    console.log('Loading collections to firebase')

    console.log('Fetch from fakestoreapi')
    const response = await fetch('https://fakestoreapi.com/products')
    const productsFromStoreApi = await response.json()

    console.log('Push to firestore')
    productsFromStoreApi.forEach( async (product) => {
        const docRef = await addDoc(collection(db, "products"), {
            title: product.title,
            category: product.category,
            description: product.description,
            image: product.image,
            price: product.price,
            stock: 5
        })
        console.log(`Product added with ${docRef.id}`)
    })
}

export default loadCollections