import React,{useState} from 'react'
import Form from '../Form/Form.css'
import Data from '../Data/Data.json'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default (props)=>{
    let {dispatch,word,name}=props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [postBody, setPostBody] = useState("");
    const [list, updateList] = useState([...Data]);
    const [id, setId] = useState("");
  
    // const useAthw=(event)=>{
    //   event.preventDefault();
    //   console.log(firstName,lastName)
    //   let payLoad={firstName:firstName,lastName:lastName,phone:phone,email:email,postBody:postBody};
    //   axios.post(" https://json-team-crud.herokuapp.com/api/team ",payLoad)
    //   .then(response=>{
    //     setFirstName("")
    //     setLastName("")
    //     setEmail("")
    //     setPhone("")
    //     setPostBody("")
    //     window.location.replace("/Table");
    //   })
    // }

 const handleSubmit=(event)=>{
   event.preventDefault();
      Data.push({id:"",firstName:firstName,lastName:lastName,phone:phone,email:email,postBody:postBody})
     console.log(lastName)
 
 }
//  const addNew = () => {
//     console.log(lastName)
//     //  let newList = [...list];
//     //  newList.push({id:id,firstName: firstName,lastName:lastName});

//     //  updateList(newList);
//     //  setFirstName('');
//     //  setLastName("")
    
//     //  setId("")
// };
    // const [list, updateList] = useState(Data);
    // const [firstName, setFirstName] = useState('');
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const addTeam = () => {
    //         // let newList = [...list];
    //         // newList.push({id: list.length+2, firstName: firstName});
    //         // updateList(newList);
    //         // setFirstName("");
    //         console.log(firstName)
    //     };
    // }
    
    // const [list, updateList] = useState(Data);
    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [id, setId] = useState("");
    // let list2=[...Data]
    // const saveData=()=>{
    //     list2.push({id:list.id,firstName:firstName,lastName:lastName})
    //     updateList(list2)
    //     setId("")
    //     setfirstName("")
    //     setlastName("")
    // }
return(
    <div className="abcx">
        <h1>{props.word}</h1>
            {/* {props.children} */}
            <h1>{props.name}</h1>
    <form onSubmit={event=>handleSubmit(event)}>
   <label>FIRST NAME</label>
    <input type="text" name="firstname" required  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    <label>LAST NAME</label>
    <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
    <label>PHONE</label>
    <input type="number" name="phone"  value={phone} onChange={(e)=>setPhone(e.target.value)} required maxLength="8"/>
    <label>EMAIL</label>
    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    <label>POST BODY</label>
    <input type="text" name="postbody"  value={postBody} onChange={(e)=>setPostBody(e.target.value)} required/>
    <button >Submit</button>

    <button onClick={()=>{
            dispatch({
                type:"SET_WORD",
                payLoad:Math.random() *50
            })
    }}>
        Change text</button>

  </form>
  </div>
)
}
