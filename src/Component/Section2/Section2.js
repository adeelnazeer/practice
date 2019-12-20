import React from 'react'
import Style from '../Section2/Section2.css'
import Image from '../../asserts/Images/2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default ()=>{
    return(
        <div className="container-fluid2">
   
        <div className="topdiv">
            <div className="row1" style={{display:'flex',justifyContent:'space-evenly'}}>
               
        <div className="col-md-6 hed">
             <div className="paragraph_div1" data-aos="zoom-in-right" data-aos-duration="2000" >
                 <div className="marke" ><h1 className="marke" >Web Design & Development</h1></div>
                 <div><p className="digital">Web designing and development, by providing <br></br>
                interective, responsive and user-oriented quality
               </p></div>
                 <div className="btn">
                     <a><button className="btnad" >Read More</button></a>
                     </div>
                 </div>
                 </div>
                 <div className="col-md-6 ima">
        <div className="image_div" data-aos="zoom-in-left" data-aos-duration="2000" >
            <img className="circle_img" src={Image} alt=""/> </div></div>
        </div>
        </div>
    </div>
    
    )
}