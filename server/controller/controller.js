import userModel from "../model/userModel.js"


export const getUsers=async(req,res)=>{
    try {   
        const user=await userModel.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message:error.message})     
    }
}

export const createuser=async(req,res)=>{
    const data=req.body
    const user=new userModel(data)
    try { 
        await user.save()
        res.status(201).json(user)   
    } catch (error) {
        res.status(404).json({message:error.message})     
    }
}