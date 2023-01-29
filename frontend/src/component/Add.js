import React from 'react'
import { useState } from 'react'
import { DVD } from './DVD';
import { Book } from './Book';
import { Furniture } from './Furniture';

function Add () {
    const[Sku,setSku]=useState("");
    const[name,setname]=useState("");
    const[price,setprice]=useState(0);
    const[type,settype]=useState("");
    const[size,setsize]=useState(0);
    const[height,setheight]=useState(0);
    const[width,setwidth]=useState(0);
    const[lenght,setlenght]=useState(0);
    const[weight,setweight]=useState(0);
  return (

    <div>
    <h1 ><p className="ms-3  .text-primary ">Product Add</p></h1>
    <div className="float-end">
    <button type="button" className="btn btn-primary ">ADD</button>
    <button type="button" className="btn btn-danger ms-1 me-1">CANCEL</button>
    <br></br>
    </div>
    <form className="m-3 w-50 #Product_form"  id ="#product_form">
  <div className="m-3">
    <label  className="#Sku-label">#Sku:</label>
    <input  type="text" className="#Sku-control ms-4" id="#Sku" placeholder="Enter SKU" onChange={(e)=>{ setSku(e.target.value)}} />
  </div>
  <div className="#Name m-3">
    <label  className="#Name">#Name:</label>
    <input type="text" className="#Name-control ms-2"  placeholder="Enter Name"  id ="#name" onChange={(e)=>{setname(e.target.value)}} />
  </div>
  <div className="m-3 #Price">
    <label  className="#Price">#Price:</label>
    <input type="text" className="#Price ms-3 "  placeholder="Enter Price" id ="#price" onChange={(e)=>{setprice(e.target.value)}} />
  </div>
  <div className='m-3'>
  <label className="#Price">#Type:</label>

  <select className=" w-25 ms-3" id="#productType" name="sellist1" onChange={(e)=>{settype(e.target.value)}}>
      <option value={"DVD"}>DVD</option>
      <option value={"Book"}>Book </option>
      <option value={"Furniture"}>Furniture </option>
    </select>
    
  </div>
    
  
    <DVD type={type} setsize={setsize}/>
   
    <Book type={type} setweight={setweight}/>
  
    <Furniture type={type} setheight={setheight} setlenght={setlenght} setwidth={setwidth}/>

    
   
</form> 
    
    
    </div>
  )
}

export default Add