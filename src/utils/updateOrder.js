import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const updateOrder = async (cart, order, clearCart) => {
    console.log("Carrito a actualizar: ", cart);
    console.log("Orden a actualizar: ", order);

    // Open batch operation
    const batch = writeBatch(db);

    const outOfStock = [];

    // Check stock cart
    for (const product of cart) {
        const docSnap = await getDoc(doc(db, "products", product.id));
        console.log("ForEach");

        const productToUpdate = { id: docSnap.id, ...docSnap.data() };

        if (productToUpdate.stock >= product.quantity) {
            batch.update(doc(db, "products", productToUpdate.id), {
                stock: productToUpdate.stock - product.quantity
            });
        }
        else {
            outOfStock.push(productToUpdate);
            console.log(outOfStock);
        }
    }


    console.log("Cantidad de items fuera de stock: ", outOfStock.length);

    if (outOfStock.length === 0) {
        try {
            Swal.fire({
                title: 'Generando Orden',
                showConfirmButton: false,
                didOpen: async () => {
                    // Create Order in firebase
                    Swal.showLoading()

                    const docRef = await addDoc(collection(db, "orders"), order);
                    await batch.commit();
                    clearCart();

                    Swal.close({orderId: docRef.id})
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                console.log(result);
                if (result) {
                    Swal.fire('Orden creada', `Orden ID: ${result.orderId}`, 'success')
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    else {
        console.log(outOfStock);
    }
};

export default updateOrder;