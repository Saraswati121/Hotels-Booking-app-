import React, { useState } from 'react'
import { Login } from './Login'
import { Signup } from './Signup'
import "./style.css"

export const Home = () => {
    const [hommy,setHommy]=useState(false)

const btnclk =()=>{
    setHommy(hommy ? false : true)
}
  return (
    <div className='home'>
        <button onClick={btnclk} className="btn1">Signup</button>
        <button onClick={btnclk} className="btn">Login</button>
        {!hommy ? <Signup/> : <Login/>}
    </div>
  )
}
