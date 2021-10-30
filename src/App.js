import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <ItemListContainer titulo="Contador carrito"/>
    </div>
  );
}

export default App;