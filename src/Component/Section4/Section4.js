import React from 'react'
import Section4 from '../Section4/Section4.css'
import Image1 from '../../asserts/Images/noun_digital native_2677335.png'
import Image2 from '../../asserts/Images/noun_strategy_2457865.png'
import Image3 from '../../asserts/Images/noun_Technology_2823581.png'
export default ()=>{
    return(
        <div className="container-fluid section4">
            <div className="inner"> 
                <div className="Heading">
                   <h1 >Who We Are</h1>
                </div>
                <div className="paragraph">
                    <p>The Designers is a <strong>Women-run digital agency</strong> that is based in the UK and Pakistan.We are here to cater digital needs<br></br>
                    of your orgnization by using affordable evolving technologies and latest industry standards.Furture is tech and our<br></br>
                    team has expertise in boosting your business from Graphic desiging,web development,software development<br></br>
                    creative writing, digital marketing, to 3D Modeling and state-of-the-art architecture designing.
                    </p>
                </div>
                
                <div class="row">
                    <div className="rowinner">
                    <div class="column">
                     <div class="card">
                     <div className="cardheader">
                         <div className="div-one"></div>
                         <div className="div-two"></div>
                         <div className="div-three"></div>
                     </div>
                     <div className=" image" ><img className="img" src={Image1} alt=""/>
                    <div className="cardfooter">
                        <p>To work towords emprowering the young <br></br>
                        generation & specifically women in the<br></br>
                        field of inovation & technology.
                        </p>
                        </div>
                        </div>
                     </div>
                 </div>

                 <div class="column">
                     <div class="card2">
                     <div className="cardheader"></div>
                     <div className="image" ><img className="img" src={Image2} alt=""/>
                    <div className="cardfooter">
                        <p>Strengthening Digital economy<br></br>
                        of pakistan.
                        </p>
                    </div>
                </div>
                </div>
                </div>
  
                 <div class="column">
                 <div class="card3">
                 <div className="cardheader">
                 <div className="div-one"></div>
                         <div className="div-two"></div>
                         <div className="div-three"></div>
                 </div>
                  <div className="image" ><img className="img" src={Image3} alt=""/>
                     <div className="cardfooter">
                         <p>Creating an Imppact in community<br></br>
                         by inclusion of technology.
                         </p>
                     </div>
                     </div>
                 </div>
                 </div>
  

        </div>

        </div>
            </div>
            </div>
      
         

    )
}
