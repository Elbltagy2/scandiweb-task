import React from 'react'

export const Furniture = (type) => {



  if (type.type==="Furniture"){

    return (
    <div>
    <h2 className='ms-5'>Furniture</h2> 
   
    <div className="m-3 w-50 " id ="#height">
      <label  className="#Height-label">#Height:</label>
      <input  type="text" className="#Height-control ms-4" id="#Height" placeholder="Enter Height" onChange={(e)=>{
        type.setheight(e.target.value)
      }}  />
    </div>
    <div className="m-3 w-50 " id ="#width">
      <label  className="#width-label">#width     :</label>
      <input  type="text" className="#width-control ms-4" id="#width" placeholder="Enter width" onChange={(e)=>{
        type.setwidth(e.target.value)
      }} />
    </div>
    <div className="m-3 w-50 " id ="#length">
      <label  className="length-label">#length:</label>
      <input  type="text" className="#length-control ms-4" id="#length" placeholder="Enter length"  onChange={(e)=>{
        type.setlenght(e.target.value)
      }} />
    </div>
   
    </div>
    
  )
}


}