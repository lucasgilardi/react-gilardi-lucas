import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Collection from './components/Collection/Collection';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/collection' element={<Collection/>}/>
            <Route exact path='/category' element={<ItemListContainer/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route exact path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;