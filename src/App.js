import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./cartContext/CartContext";
import Cart from "./components/cart/CartContainer";
import CartFormContainer from "./components/cart/cartForm/CartFormContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/itemList/item/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/NavBar";

// export const cartContext = createContext();

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/genre/:genre" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart-form" element={<CartFormContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
