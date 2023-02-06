import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './component/List';
import AddProduct from './component/Add';


function App() {
  return (
    <BrowserRouter>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
