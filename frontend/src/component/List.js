import React, { useState,useEffect } from 'react';
import 'animate.css/animate.min.css';
import './style.css'
import axios from 'axios'


function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const res = axios.get("http://localhost:8080/scandiweb-task/backend/core/").then(res=>{
      setAllProducts(res.data);
      console.log(res.data);
     })
     .catch(err=>
      {console.log(err)}
     );
  }, []);
  const handleCheckboxChange = (event, product) => {
    const { checked } = event.target;

    if (checked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((p) => p.name !== product.name)
      );
    }
  };

  const handleAddProduct = () => {
    
    setAllProducts([...allProducts, { name: 'New Product', price: 25 }]);
  };

  const handleDeleteProduct = async() => {
    var send=[];
    selectedProducts.forEach(element => {
      send.push(element.SKU);
    });
   await console.log(send);
    const res = await axios.patch("http://localhost:8080/scandiweb-task/backend/core/",{send}).then(res=>{
    
      console.log(res.data);
     })
     .catch(err=>
      {console.log(err)}
     );
    setAllProducts(allProducts.filter((p) => !selectedProducts.includes(p)));
    selectedProducts=[];
    send=[];

  };

  return (
    <div className="container">
      <header className="header">
        <h1>Product List</h1>
        <div className="header-buttons">
          <button onClick={handleAddProduct} className="add-button">Add Product</button>
          <button onClick={handleDeleteProduct} className="delete-button">Delete Product</button>
        </div>
      </header>
      <ul className="product-list">
        {allProducts.map((product) => (
          <li key={product.SKU} className="product-item">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, product)}
            />
            <h2 className="product-name">SKU:{product.SKU}</h2>
            <p className="product-price">NAME :{product.name}</p>
            <p className="product-price">PRICE :{product.price} $</p>
            <p className="product-price">{product.type===2?"diemtions":product.type===1?"size":"width"} :{product.attributes}</p>



          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
