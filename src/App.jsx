// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import CartContainer from './containers/CartContainer';
import CartContext from './context/CartContext';
import OrdersContainer from './containers/OrdersContainer';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<CartContainer />}></Route>
          <Route path="/orders" element={<OrdersContainer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
