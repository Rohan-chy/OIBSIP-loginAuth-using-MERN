import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import "../style/login.css"

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleEmail=(e)=>{
        setEmail(e.target.value)
        // console.log(email)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        // console.log(password)
    }
    const loginFunc=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:4000/login',{email,password
        }).then(result=>{
            console.log(result)
            alert("login successfully")
            navigate('/home')
        }).catch(error=>{
            console.log(error)
            alert('invalid email or password')
        })    
        
    }
  return (
    <div className="container">
    <h2>Login Form</h2>
    <form onSubmit={loginFunc} method="POST">
        <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="email"  name="email"value={email} onChange={handleEmail} required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"value={password}onChange={handlePassword} required/>
        </div>
        <button type="submit">Login</button>
    </form>
    <p>Create New account?</p>
        <NavLink to={'/'} >
            <button className='signup-btn'>SignUp</button>
        </NavLink>
</div>
  )
}

export default Login;