import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./style.css"

export const FormData = () => {
    let url="https://fierce-oasis-15296.herokuapp.com/hotels"
const [data,setData]= useState([])

useEffect(() => {
    getData()
},[])
const getData = async () =>{
    const {data}= await axios.get(url)
    setData([...data])
}

const editChange =(id)=>{

}
const deleteChange = async (id)=>{
     const res= await axios.delete(`https://fierce-oasis-15296.herokuapp.com/hotels/${id}`)
     const {data}= await axios.get(url)
     setData([...data])
}
  return (
    <div>
        <h1 style={{textAlign:"center",backgroundColor:"teal",color:"white"}}>All Hotel's Data</h1>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Type of Room</th>
                <th>Bed Type</th>
                <th>No of Person</th>
                <th>Capacity</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e)=>{
                    return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.category}</td>
                        <td>{e.type_of_room}</td>
                        <td>{e.bed_type}</td>
                        <td>{e.no_of_person}</td>
                        <td>{e.capasity}</td>
                        <td>{e.cost}</td>
                        <td>{e.booked ? "not avilable" : "Avilable"}</td>
                        <td><button  onClick={()=> editChange(e.id)} className="dlt">Edit</button></td>
                        <td><button  onClick={()=> deleteChange(e.id)} className="dlt">Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
