import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home key="home" title="Home" APIurl="https://fakestoreapi.com/products"/>} />
          <Route path="/men" element={<Home key="men's clothing" title="Men's clothing" APIurl="https://fakestoreapi.com//products/category/men's clothing"/>} />
          <Route path="/women" element={<Home key="women's clothing" title="Women's clothing" APIurl="https://fakestoreapi.com//products/category/women's clothing"/>} />
          <Route path="/jewelery" element={<Home key="jewelery" title="Jewelery" APIurl="https://fakestoreapi.com//products/category/jewelery"/>} />
          <Route path="/electronics" element={<Home key="electronics" title="Electronics" APIurl="https://fakestoreapi.com//products/category/electronics"/>} />
        </Routes>
      </div>
    </Router>
  );
} 

export default App;
