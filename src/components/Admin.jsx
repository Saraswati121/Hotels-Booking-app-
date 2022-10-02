import React from "react"
import axios from "axios"
import {RadioGroup,HStack,Radio,Button} from "@chakra-ui/react";
import { useState } from "react";
import "./style.css"
import {useNavigate } from "react-router-dom";

export const Admin = () => {
    const [formData,setFormData] = useState({booked:false});
    const nav=useNavigate()
    const handelRadio=(e)=>{
        setFormData({
            ...formData,
            type_of_room:e
        })
    }
    const handelClick = ()=>{
        axios.post("https://fierce-oasis-15296.herokuapp.com/hotels",formData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        //console.log(formData);
    }
    const handelChange =(e)=>{
      const {value,id}= e.target;
      setFormData({
        ...formData,
        [id]:value
    })
    }

    const showClick=()=>{
      nav("/fData")
    }
  return (
    <div>
    <button className="btn" onClick={showClick}>Show hotel details</button>
        <div className="admin">
        <label>Category :</label>
        <select  id="category"  onChange={handelChange}>
        <option>Select Category</option>
         <option>Family</option>
          <option>Deluxe</option>
          <option>Suite</option>
        </select><br />
        <label>Upload Image :</label>
        <input type="text" placeholder="Enter image url" onChange={handelChange} id="image_url"  className='ip'/><br />
        <label>Type of room :</label>
        <RadioGroup margin="auto" width="150px" onChange={handelRadio} id="type_of_room">
          <HStack spacing="25px"  id="rdo">
            <Radio value="AC">AC</Radio>
            <Radio value="Non-AC">Non-AC</Radio>
          </HStack>
        </RadioGroup><br />
        <label>Bed Type :</label>
        <select  id="bed_type"  onChange={handelChange}>
        <option>Select Type</option>
         <option>Single</option>
          <option>Double</option>
        </select><br />
        <label>No Of Adults :</label>
      <input type="number"  id="no_of_person" onChange={handelChange}  className='ip'/><br />

      <label>max capasity :</label>
      <input type="number"  id="capasity" onChange={handelChange}  className='ip'/><br />

      <label>Cost per night in Rs :</label>
      <input type="number"  id="cost" onChange={handelChange}  className='ip'/><br />

        <Button  colorScheme="teal" type="submit" onClick={handelClick}>
          Submit
        </Button>
        </div>
    </div>
  );
};



