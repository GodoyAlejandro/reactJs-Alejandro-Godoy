import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import Test from "./testComponents/Test1";
import Cart from "./components/Cart";

export const cartContext = createContext();

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addItem = (item) => {
    setCartItem([...cartItem, item]);
  };
  const removeItem = (id) => {
    cartItem.filter((rItem) => rItem.id !== id);
  };
  const clear = () => {
    setCartItem([]);
  };
  const isInCart = (id) => {
    return cartItem.some((item) => item.id === id);
  };

  return (
    <>
      <cartContext.Provider
        value={{ cartItem, addItem, removeItem, clear, isInCart }}
      >
        <BrowserRouter>
          {/* afuera de las rutas se muestran los componentes que van a estar siempre presentes en la pagina */}
          <NavBar />

          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/genre/:genre" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </cartContext.Provider>
    </>
  );
}

export default App;
