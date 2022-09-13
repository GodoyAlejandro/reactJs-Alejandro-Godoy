import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {createContext, useState} from 'react'
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import Test from "./testComponents/Test1";
import promiseProds from './mocks/mockData';
import Cart from './components/Cart'

export const contexto = createContext();

function App() {
  const [color, setColor] = useState('blue');


  return (
   <>
   <contexto.Provider value={{color, setColor, promiseProds}}>
    <BrowserRouter>
    {/* afuera de las rutas se muestran los componentes que van a estar siempre presentes en la pagina */}
     <NavBar/>
     
     <Routes>
       <Route path='/test' element={ <Test /> } />
       <Route path='/' element={ <ItemListContainer/> } />
       <Route path='/genre/:genre' element={ <ItemListContainer/> } />
       <Route path='/product/:id' element={ <ItemDetailContainer/> } />
       <Route path='/Cart' element={ <Cart/> } />
     </Routes>
     <Footer/>
    </BrowserRouter>
   </contexto.Provider>
   </>
  );
}

export default App;
