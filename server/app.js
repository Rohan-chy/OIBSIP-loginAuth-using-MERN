const express=require('express')
const cors=require('cors')
const { connectDatabase } = require('./database/database')
const User=require('./model/userModel')
const bcrypt=require('bcryptjs')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database connection
connectDatabase()

app.post('/register',async(req,res)=>{
    try {
        const {username,email,password,confirm_password}=req.body;
        // console.log(req.body)
    
        if(!username || !email || !password || !confirm_password){
            return res.status(401).json({message:"please provide username email and password"})
        }
        if (password !== confirm_password){
            return res.status(401).json({message:"password not matched"})
        }
        const alreadyRegistered=await User.find({email:email});
        if(alreadyRegistered.length>0){
            return res.status(401).json({message:"already registered"})
        }
        await User.create({
            username,email,
            password:bcrypt.hashSync(password,8)
        })
        res.status(200).json({
            message:"registered success"
        }) 
    } catch (error) {
        console.log(error.message)
    }
    
})

app.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body;
    // console.log(req.body)
    if(!email || !password){
        return res.status(402).json({message:"please enter email and password"})
    }
    const loginData=await User.find({email:email});
    
    if(loginData.length==0){
         return res.status(401).json({message:"invalid email or password"})
    }
    else{
        const passwordCheck=bcrypt.compareSync(password,loginData[0].password)
        // console.log(passwordCheck)
        if(passwordCheck){
            res.status(201).json({
                message:"login success"
            })
        }
        else{
            res.status(401).json({message:"password not matched"})
        }
    }
    } catch (error) {
        console.log(error.message)
    }

})
app.listen(4000,()=>{
    console.log("port started at 4000")
})