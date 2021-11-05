import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <ItemListContainer titulo="Item List Container"/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;