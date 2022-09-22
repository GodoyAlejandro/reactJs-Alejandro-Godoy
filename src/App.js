import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import Cart from "./components/cart/CartContainer";
import { CartProvider } from "./cartContext/CartContext";
import FirebaseTest from "./testComponents/FirebaseTest";

// export const cartContext = createContext();

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          {/* afuera de las rutas se muestran los componentes que van a estar siempre presentes en la pagina */}
          <NavBar />

          <Routes>
            <Route path="/test" element={<FirebaseTest />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/genre/:genre" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
