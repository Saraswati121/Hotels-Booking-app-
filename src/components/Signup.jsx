 import React, { useState } from 'react'
 import { Link} from "react-router-dom";
import "./style.css"

export  function Signup() {
const [formData, setFormData] = useState({})

  const handelChange = (e) => {
    const {id,value} = e.target;
    setFormData({
        ...formData,
        [id]: value
    })
    // console.log(formData)
  };

  const handelsignup =(e)=>{
    e.preventDefault();
    let data= JSON.parse(localStorage.getItem("userdata"))||[]
    data = [...data,formData] 
     localStorage.setItem("userdata",JSON.stringify(data))

  }
  return (
   <div className='frm'>
   <form onSubmit={handelsignup}>
    <label>UserName:</label><br />
   <input type="text"  id="username" onChange={handelChange} placeholder="Enter Name"  className='ip'/><br />
   <label>Email:</label><br />
    <input type="mail" id='mail'  onChange={handelChange} placeholder="Enter mail"  className='ip'/><br />
    <label>Password:</label><br />
    <input type="password" name="" id="password"  onChange={handelChange} placeholder="Enter password"  className='ip'/><br />
    <input type="submit" className='btn'/>
   </form>
   <Link to="/login">Already have an account. Login</Link>
   </div>
  );
}