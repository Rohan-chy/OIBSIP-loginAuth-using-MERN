import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from "axios"
import "../style/signup.css"

const SignUp = () => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')

    const navigate=useNavigate()

    const handleUsername=(e)=>{
        setUsername(e.target.value)
        // console.log(username)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        // console.log(email)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        // console.log(password)
    }
    const handleConfirm=(e)=>{
        setConfirmPassword(e.target.value)
        // console.log(confirmpassword)
    }

    const create=async(e)=>{
        e.preventDefault();
         await axios.post('http://localhost:4000/register',{
            username:username,
            email:email,
            password:password,
            confirm_password:confirmpassword
        }).then(result=>{
            console.log(result)
            alert("registered successfully")
            navigate('/login')
        }).catch(error=>{
            console.log(error)
            alert('already registered')
        })

    }
  return (
    
    <div className="container">
        <h2>Registration Form</h2>
        <form action=" " method="POST" onSubmit={create}>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text"  name="username" id="username"value={username} onChange={handleUsername}required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email"  name="email" id="email" value={email} onChange={handleEmail}required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password"  name="password" id="password"value={password}onChange={handlePassword} required/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password"  name="confirm_password"id="confirm_password"value={confirmpassword}onChange={handleConfirm} required/>
            </div>
            <button type="submit">Register</button>
            
        </form>
        <p>Already have account?</p>
        <NavLink to={'/login'} >
            <button >Login</button>
            </NavLink>
    </div>
  )
}
export default SignUp;