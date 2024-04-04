const user= require('../models/user')
exports.insertuser= async (req,res)=>{
    const myuser= await user.create(req.body)
    res.status(201).json({ 
        success:true,
        data:myuser
    })   
}
exports.getUsers=async (req,res)=>{
    const allUsers= await user.find()
    res.status(200).json({
        success:true,
        data:allUsers
    })
}