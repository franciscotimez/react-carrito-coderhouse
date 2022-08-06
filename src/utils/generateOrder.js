
// Generador de orden
const generateOrder = (buyer, cart, cartResume) => {
    return {
        buyer,
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