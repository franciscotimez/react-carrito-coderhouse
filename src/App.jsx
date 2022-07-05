import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/idex';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
