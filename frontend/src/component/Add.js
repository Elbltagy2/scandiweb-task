import React, { useState } from "react";
import './code.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const navigate = useNavigate();
    const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const [product, setProduct] = useState({
    sku: "",
    price: "",
    name: "",
    type: ""
  });

  const [additionalInput, setAdditionalInput] = useState({
    size: "",
    weight: "",
    width: "",
    height: "",
    length: ""
  });
  const[message,setmessage]=useState("");
  const[open,setopen]=useState("");

  const handleChange = event => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleAdditionalInput = event => {
    setAdditionalInput({ ...additionalInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    
    fetch('https://elbltagy.000webhostapp.com/backend/core/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify([product,additionalInput])
    })
      .then(response => response.json()
      )
      .then(data => {
        console.log(data)
        if (data.status==="success"){
          navigate('/');           

        }else{
          window.alert(data.message);
        }
        
      })
      .catch(error => console.error(error));
 
  
     
    // Add code to submit the product to the database or API here
  };

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit} id="#product_form">
        <div className="form-input">
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="#sku"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="#price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="#name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="type">Type:</label>
          <select
            id="#productType"
            name="type"
            value={product.type}
            onChange={handleChange}
          >
            <option value="">Please select</option>
            <option value="0">DVD</option>
            <option value="1">Book</option>
            <option value="2">Furniture</option>
          </select>
          
        </div>
        {product.type === "0" && (
          <div className="form-input" id="#DVD">
            <label htmlFor="size">Size:</label>
            <input
              type="text"
              id="#size"
              name="size"
              value={additionalInput.size}
              onChange={handleAdditionalInput}
              required
            />
          </div>
        )}
{product.type === "1" && (
<div className="form-input" id ="#Book">
<label htmlFor="weight">Weight:</label>
<input
           type="text"
           id="#weight"
           name="weight"
           value={additionalInput.weight}
           onChange={handleAdditionalInput}
           required
         />
</div>
)}
{product.type === "2" && (
<React.Fragment>
<div id="#Furniture">
<div className="form-input">
<label htmlFor="width">Width:</label>
<input
     type="text"
     id="#width"
     name="width"
     value={additionalInput.width}
     onChange={handleAdditionalInput}
     required
   />
</div>
<div className="form-input">
<label htmlFor="height">Height:</label>
<input
     type="text"
     id="#height"
     name="height"
     value={additionalInput.height}
     onChange={handleAdditionalInput}
     required
   />
</div>
<div className="form-input" >
<label htmlFor="length">Length:</label>
<input
     type="text"
     id="#length"
     name="length"
     value={additionalInput.length}
     onChange={handleAdditionalInput}
     required
   />
</div>
</div>
</React.Fragment>
)}
<button type="submit">Add Product</button>
<button type="cancel">Cancel</button>
</form>

</div>
);
};

export default AddProduct;