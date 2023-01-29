import React from 'react'

export const Book = (type) => {



  if (type.type==="Book"){

    return (
    <div>
    <h2 className='ms-5'>Book </h2> 
   
    <div className="m-3 w-50 #Product_form" id ="#Weight">
      <label  className="#Weight-label">#Weight:</label>
      <input  type="text" className="#Weight-control ms-4" id="#Weight" placeholder="Enter Weight" onChange={(e)=>{
        type.setweight(e.target.value)
      }} />
    </div>
   
    </div>
    
  )
}


}