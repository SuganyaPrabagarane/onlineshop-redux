import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import Users from './components/Users'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', background: '#f5f5f5' }}>
        <Link to="/products" style={{ marginRight: '10px' }}>Products</Link>
        <Link to="/cart" style={{ marginRight: '10px' }}>Cart</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
