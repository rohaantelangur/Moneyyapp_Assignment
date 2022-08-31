import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/products" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
