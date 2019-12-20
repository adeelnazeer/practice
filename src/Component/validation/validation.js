import React,{useState} from 'react'

export default()=>{
    
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    
    const [email ,setEmail]=useState("");
    const [emailValidation, setemailValidation]=useState(false);
    const [emailValidation1, setemailValidation1]=useState(false);
    const [password,setPassword]=useState("");
    const [passwordValidation,setPasswordValidation]=useState(false);

  

    const customValidation=()=>{
    
        let regex ='^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'
        if(!email){
            
            setemailValidation(true);
        }
        else if(!email.match(regex)){
                setemailValidation1(true);
                
                
        }
        if(!password){
                setPasswordValidation(true);
        }
        
    }
  

    return(
<div>
        <form onSubmit={event=>submitHandler(event)}>
            <input placeholder="email" type="email" required  />
            <input placeholder="password" type="password" minLength="6" maxLength="10" required />
            <button>Add</button>
        </form>

        {/* custom validation */}

        <input type="email" onChange={event=>{
            setEmail(event.target.value);
         
        }}/>
        <p style={{color:"red"}}>{
        emailValidation ? "Email is Required ":""
        }</p>
            <p style={{color:"red"}}>{emailValidation1 ? "required proper format @ and .":""}</p>

        <input type="password" onChange={event=>{
            setPassword(event.target.value);
         
        }}/>
        <p style={{color:"red"}}>{passwordValidation ? "Password is Required ":""}</p>
     

        <button onClick={()=>customValidation()}>Save</button>

        
        </div>
    );
}

// import React from 'react'

// export default ()=>{
//     const logOut1=()=>{
//         localStorage.removeItem("token")
//         window.location.replace("/")
//     }
//     return(
//         <div>

//         <h1>Well Come</h1>
//             <button onClick={()=> logOut1()}>LOG OUT</button>
//         </div>
//     )
// }