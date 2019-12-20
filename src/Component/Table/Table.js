import React ,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Data from '../Data/Data.json'
import Style from '../Table/Table.css'
import { Table } from 'react-bootstrap';
import Form from '../../Component/Form/Form'
import {Link} from 'react-router-dom'
import axios from 'axios'

    
export default (props)=>{
  
    const [dataa,setDataa]=useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [postBody, setPostBody] = useState("");
    const [id, setId] = useState("");
  
    const [list, updateList] = useState(Data);
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const results = !searchTerm
      ? Data
      : Data.filter(row =>
          row.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          
        );
        useEffect(()=>{
             updateList(results);
       },[]);
        
  
   useEffect(()=>{
      axios.get('https://personal-app-team.herokuapp.com/api/team')
      .then(response=>{
        setDataa(response.dataa)
      })

   },[]);

    const handleSubmit=(e)=>{
        e.preventDefault(); 
    
      
        // let newList = [...list];
         list.push({id:id,firstName: firstName,lastName:lastName,phone:phone,email:email,postBody:postBody});
    
        //  updateList(newList);
         setFirstName('');
         setLastName("")
         setPhone('')
         setEmail('')
         setPostBody('')
         setId("")
    };

    const handleRemoveItem = firstName => {
        updateList(list => list.filter(item => item.firstName !== firstName));
      }
    const sortBy=(key)=>{
    list.sort((a,b) => a.firstName.localeCompare(b.firstName));
        }

    const sortByDec=(key)=>{
        list.sort((a,b) => b.firstName.localeCompare(a.firstName)); }

   
    return(
    
   <div  id="google_translate_element" >  <h1>{props.word}</h1>
   {/* {props.children} */}
   <h1>{props.name}</h1>
        <Table  striped bordered hover variant="dark">
               
            {/* {props.children} */}
           
            <thead>
        <tr>
        
          <th>id<input
        type="text"
          placeholder="Search for..."
          onChange={handleChange}/></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
    <Link to="/Form"><th><button >Email</button></th></Link>
          <th>Post Body

          </th>
        <th>
             <div class="dropdown">
  <button class="dropbtn">Sort By</button>
  <div class="dropdown-content">
     <a href="#" onClick={() => sortBy('firstName')}> Ascending</a>
    <a href="#" onClick={() => sortByDec('firstName')}>Descending</a> 
  
  </div>
</div></th>
        </tr>
        </thead>
        <tbody>
            {
              
              results.map(row =>(
                <tr>
          
                    <td>{row.id}</td>
                      <td>{row.firstName}</td>
                      <td>{row.lastName}</td>
                      <td>{row.phone}</td>
                      <td>{row.email}</td>
                      <td>{row.postBody}</td>
                     <td><button onClick={() =>handleRemoveItem(row.firstName)}>Delete</button></td>
                   
                 
                    
                      </tr>
                      

                ))
            }
      
        </tbody>
        <div className="abcx">
      
      <form onSubmit={handleSubmit}>
     <label>FIRST NAME</label>
      <input type="text" name="firstname"  pattern="[a-z|[A-Z]|{5}" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <label>LAST NAME</label>
      <input type="text" name="lastname" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <label>PHONE</label>
      <input type="text" name="phone" required minLength='6' pattern="^\d{4}-\d{3}-\d{4}$" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <label>EMAIL</label>
      <input type="email" name="email" required pattern="/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>POST BODY</label>
      <input type="text" name="postbody" required value={postBody} onChange={(e)=>setPostBody(e.target.value)}/>
      <button>Submit</button>
    </form>
    </div>
        </Table>
           
       </div> 
       
    )
    
}

 
  