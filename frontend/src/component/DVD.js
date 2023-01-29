import React from 'react'

export const DVD = (type) => {



  if (type.type==="DVD"){

    return (
    <div>
    <h2 className='ms-5'>DVD </h2> 
   
    <div className="m-3 w-50 #Product_form" id ="#Size">
      <label  className="#Size-label">#Size:</label>
      <input  type="text" className="#Size-control ms-4" id="#Size" placeholder="Enter Size" onChange={(e)=>{type.setsize(e.target.value)}}  />
    </div>
   
    </div>
    
  )
}


}