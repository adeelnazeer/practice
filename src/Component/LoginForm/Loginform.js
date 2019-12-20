import React ,{useState, useImperativeHandle} from 'react'
import Style from '../LoginForm/Loginform.css'
import Data from '../Data/Data.json'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import logo from '../../asserts/Spinner/spinner.svg'
import {apiPath} from  '../Config/Config';
import { loadOptions } from '@babel/core'
export default ()=>{
  const [data,setData]=useState(Data)
 
    // const useAthw=(event)=>{
    //   event.preventDefault();
    //   console.log(email,password)
    //   let payLoad={email:email,password:password};
    //   axios.post(" https://json-team-crud.herokuapp.com/api/team ",payLoad)
    //   .then(response=>{
    //     setPassword("")
    //     setEmail("")
    //     window.location.replace("/Table");
    //   })
    // }
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [errormessage,setErrormessage]=useState("");

    const userAuthentication=(event)=>{
        event.preventDefault();
        let payLoad={email:email,password:password};
        axios.post(apiPath+"/api/login",payLoad).then(response=>{
     
      localStorage.setItem("token",response.data.token,);
      
            setPassword("");
            setEmail("");
            window.location.replace("/validation");
        })
        
            .catch(err=>{
                if (err.message === "Request failed with status code 404") {
                    setErrormessage("Invalid Password");
                    
                }
                else if (err.message === "Request failed with status code 500")
                {
                    setErrormessage("Email does not exist");
                }

            });
          }
       
    return(
    //    
    
    <div class="container">
    
    <form onSubmit={event=>userAuthentication(event)}>
      <label for="usrname">Username</label>
      <input type="email" name="usrname" 
       value={email} onChange={(e)=>setEmail(e.target.value)} required/>
     
  
      <label for="psw">Password</label>
      <input type="password" id="psw" name="psw" 
     
      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
      maxLength='10'
      value={password} onChange={(e)=>setPassword(e.target.value)} required />
<p style = {{color:"red"}}>{errormessage}</p>
      
      <button  type="submit" value="Submit"><Loader type="Circles" color="#somecolor" height={80} width={80}/>SUBMIT</button>
    </form>
  </div>
    )
}