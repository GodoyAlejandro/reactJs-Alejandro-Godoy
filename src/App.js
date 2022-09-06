import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/itemList/ItemListContainer"
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";

function App() {
  
  return (
   <>
   <BrowserRouter>
   {/* afuera de las rutas se muestran los componentes que van a estar siempre presentes en la pagina */}
    <NavBar/>
    
    <Routes>
      <Route path='/' element={ <ItemListContainer/> } />
      <Route path='/genre/:genre' element={ <ItemListContainer/> } />
      <Route path='/product/:id' element={ <ItemDetailContainer/> } />
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
