import React from 'react'
import Style from '../Section1/Section1.css'
import Image from '../../asserts/Images/3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default ()=>{
    return(
        <div className="container-fluid2">
   
        <div className="topdiv">
            <div className="row1" style={{display:'flex',justifyContent:'space-evenly'}}>
            <div className="col-md-6 ima">
        <div className="image_div" data-aos="flip-right" data-aos-duration="2000" >
            <img className="circle_img" src={Image} alt=""/> </div></div>
        <div className="col-md-6 hed">
             <div className="paragraph_div3" data-aos="flip-left" data-aos-duration="2000" >
                 <div className="marke" ><h1 className="marke" >Architecture & Construction</h1></div>
                 <div><p className="digital">Our Architecture and Construction service optimize<br></br>
                 your space and concept design, by 3d technology<br></br>
               models and construction design.</p></div>
                 <div className="btn">
                     <a><button className="btnad" >Read More</button></a>
                     </div>
                 </div>
                 </div>
               
        </div>
        </div>
    </div>
    
    )
}