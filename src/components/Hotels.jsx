import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import "./style.css"

export const Hotels = () => {
    let url="https://fierce-oasis-15296.herokuapp.com/hotels"

    const [data,setData]= useState([])
    
    useEffect(() => {
        getData()
    },[])
    const getData = async () =>{
        const {data}= await axios.get(url)
        setData([...data])
    }

    const booked =()=>{
      getData()
    }

    let op;
      function sortpop(e){
        let x=e.target.value;
        if(x ==="lth"){
          op = data.sort((a,b)=>{
           return (a.cost - b.cost);
           })
        }
        else if(x === 'htl'){
            op = data.sort((a,b)=>{
                return (b.cost - a.cost);
                })
        }
        setData([...op])
      }

      let x;
      function filterdata(e){
        let y=e.target.value;
        x= data.filter((e)=>{
            return e.category === y
        })

        setData([...x])
      }
  return (
    <div >
        <div className='funly'>
        <label htmlFor="">Sort by Price : </label>
        <select  id="rgn" onChange={(e)=>sortpop(e)}>
           <option value="">........</option>
            <option value="lth">Low To High</option>
            <option value="htl">High to Low</option>
        </select>
        <label htmlFor="">Filter by Category : </label>
        <select  id="rgn" onChange={(e)=>filterdata(e)}>
        <option value="">.......</option>
            <option value="Family">family</option>
            <option value="Deluxe">deluxe</option>
            <option value="Suite">suite</option>
        </select>
    </div>
       <div className='main'>
       {data.map((e)=>{
            return <Card key={e.id} data={e} book={booked}/>
        })}
       </div>
    </div>
  )
}
