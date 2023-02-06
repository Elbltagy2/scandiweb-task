import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './component/List';
import AddProduct from './component/Add';


function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
