
import React from 'react'
import Loader from 'react-loader-spinner'
export default()=>{
 //other logic
  
    return(
     <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    );
   }
