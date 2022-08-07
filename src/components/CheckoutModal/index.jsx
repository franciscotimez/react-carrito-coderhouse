import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { Shop } from '../../context/CartContext';
import generateOrder from '../../utils/generateOrder';
import updateOrder from '../../utils/updateOrder';
import "./style.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CheckoutModal = ({ isOpen, setOpen }) => {
    const {cart, clearCart, cartResume} = useContext(Shop)

    const [submitDisable, setSubmitDisable] = useState(true);
    const [buyer, setBuyer] = useState({
        name: "",
        lastname: "",
        address: "",
        phone: "",
        email: "",
        email_repeat: "",
    });

    const onCloseModal = () => {
        console.log("Cerrando Modal");
        setOpen(false);
    };

    const onInputChange = ({target}) => {
        let dataBuyer = {
            ...buyer,
            [target.name]: target.value
        }
        setBuyer(dataBuyer);

        if( dataBuyer.name.length < 3 ) {
            console.log("Error en el nombre");
            setSubmitDisable( true )
            return;
        }
        if( dataBuyer.lastname.length < 3 ) {
            console.log("Error en el apellido");
            setSubmitDisable( true )
            return;
        }
        if( dataBuyer.address.length < 3 ) {
            console.log("Error en el direccion");
            setSubmitDisable( true )
            return;
        }
        if( dataBuyer.phone.length < 3 ) {
            console.log("Error en el telefono");
            setSubmitDisable( true )
            return;
        }
        if( dataBuyer.email.length < 3 || dataBuyer.email.indexOf("@") === -1 || dataBuyer.email !== dataBuyer.email_repeat ) {
            console.log("Error en el email");
            setSubmitDisable( true )
            return;
        }
        setSubmitDisable( false )
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(buyer);

        let buyerCheck = { ...buyer }
        delete buyerCheck.email_repeat
        console.log(buyerCheck)

        const order = generateOrder(buyerCheck, cart, cartResume)
        console.log(order)
    
        // Update Stock order
        updateOrder(cart , order, clearCart)
        
        setOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onCloseModal}
            style={customStyles}
        >
            <h1> Checkout </h1>
            <hr />
            <form className="formModal" onSubmit={onFormSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Juan"
                    value={buyer.name}
                    onChange={onInputChange}
                    autoComplete="off" />

                <label>Apellido</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Perez"
                    value={buyer.lastname}
                    onChange={onInputChange}
                    autoComplete="off" />

                <label>Direccion</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Calle falsa 123"
                    value={buyer.address}
                    onChange={onInputChange}
                    autoComplete="off" />

                <label>Telefono</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="+54123123456"
                    value={buyer.phone}
                    onChange={onInputChange}
                    autoComplete="off" />

                <label>Correo Electronico</label>
                <input
                    type="text"
                    name="email"
                    placeholder="ejemplo@gmail.com"
                    value={buyer.email}
                    onChange={onInputChange}
                    autoComplete="off" />

                <label>Repetir Correo Electronico</label>
                <input
                    type="text"
                    name="email_repeat"
                    placeholder="ejemplo@gmail.com"
                    value={buyer.email_repeat}
                    onChange={onInputChange}
                    autoComplete="off" />
                <button
                    type="submit"
                    disabled={ submitDisable }
                    className="btn buttonComprar"
                >
                    Comprar
                </button>
            </form>
        </Modal>
    );
};
