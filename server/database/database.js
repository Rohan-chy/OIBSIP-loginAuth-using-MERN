const mongoose=require('mongoose')

exports.connectDatabase=async()=>{
    await mongoose.connect('mongodb+srv://loginAuth:loginAuth@cluster0.rfzpcgw.mongodb.net/')
    console.log('database connected succesfully')
}