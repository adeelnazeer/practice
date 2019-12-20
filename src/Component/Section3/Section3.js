import React from 'react'
import Style from '../Section3/Section3.css'
import Image from '../../asserts/Images/1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default ()=>{
    return(
        <div className="container-fluid">
        <div className="head">
            <h1>Our Services
            <hr  style={{color: '#552f68',backgroundColor: '#552f68',height: 4,borderColor : '#552f68',width: 90,}}/>  
            <div className="line2">
            <hr  style={{color: '#552f68',backgroundColor: '#552f68',height: 4,borderColor : '#552f68',width: 90,}}/>
            </div>
            </h1>
            
            
        </div>
        <div className="topdiv">
            <div className="row1" style={{display:'flex',justifyContent:'space-evenly'}}>
                <div className="col-md-6 ima">
        <div className="image_div" data-aos="fade-right" data-aos-duration="2000" >
            <img className="circle_img" src={Image} alt=""/> </div></div>
        <div className="col-md-6 hed">
             <div className="paragraph_di" data-aos="fade-left" data-aos-duration="2000" >
                 <div className="marke" ><h1 className="marke" >Digital Marketing & Branding</h1></div>
                 <div><p className="digital">Make your website and business more approachable<br></br>
                 by applying our smart SEO technique,which in turns<br></br>
                 yields high productivity.</p></div>
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