import React, { useState,useEffect } from 'react';
import 'animate.css/animate.min.css';
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom';



function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const res = axios.get("https://elbltagy.000webhostapp.com/backend/core/").then(res=>{
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
  const handleDeleteProduct=(event)=> {
     var send=[];
    selectedProducts.forEach(element => {
      send.push(element.SKU);
    });
    fetch('https://elbltagy.000webhostapp.com/backend/core/test.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(send)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
     setAllProducts(allProducts.filter((p) => !selectedProducts.includes(p)));
     setSelectedProducts([]);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Product List</h1>
        <div className="header-buttons">
         
          <Link to="/add"> <button   className="add-button">
          ADD</button>
          </Link>
         
          <button onClick={handleDeleteProduct} id ="#delete-product-btn" className="delete-button">MASS DELETE</button>
        </div>
      </header>
      <ul className="product-list">
        {allProducts.map((product) => (
          <li key={product.SKU} className="product-item">
            <input
              type="checkbox"
              className='.delete-checkbox'
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
