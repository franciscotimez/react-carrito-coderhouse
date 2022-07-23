
// Generador de orden
const generateOrder = (name, lastname, address, phone, email, cart, cartResume) => {
    return {
        buyer: {
            name: name,
            lastname: lastname,
            address: address,
            phone: phone,
            email: email
        },
        items: cart.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        })),
        total: cartResume.precioTotal,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrder