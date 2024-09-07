import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
