import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Admin } from '../components/Admin';
import { FormData } from '../components/FormData';
import { Home } from '../components/Home';
import { Hotels } from '../components/Hotels';
import { Login } from '../components/Login';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/fdata" element={<FormData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotels/>} />
        </Routes>
    </div>
  )
}
