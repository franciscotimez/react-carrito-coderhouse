import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
