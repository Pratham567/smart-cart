import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Pages/Shop";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Contact from "./Components/Pages/Contact";

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="Men" />} />
          <Route path="/women" element={<ShopCategory category="Women" />} />
          <Route path="/kids" element={<ShopCategory category="Kids" />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

      </Router>
      <div className="content" >
        <h3>Welcome to the smartcart</h3>
      </div>
    </div>
  );
}

export default App;
