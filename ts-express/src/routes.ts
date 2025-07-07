import express from "express"
import { getAllUsers,getUserById,createUser, updateUserById, deleteUserById } from "./userController"
const router=express.Router()

// get all users

router.get("/users",(req,res)=>{
    try{
        const users=getAllUsers()
        res.json(users)

    }catch(err){
        res.status(500).json({msg:"Error reading data"})
    }
})

router.get("/users/:id",(req,res)=>{
    const user=getUserById(Number(req.params.id));
    user?res.json(user):res.status(404).send("User not found")
})

router.post("/create",(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){ 
        res.status(400).send("Missing Fields")}
    const newUser=createUser(name,email);
    res.status(201).json(newUser)
})


router.put("/users/:id",(req,res)=>{
    const updated=updateUserById(Number(req.params.id),req.body);
    updated?res.status(204).send("user updated"):res.status(404).send("User not found")
})

router.delete("/users/:id",(req,res)=>{
    const deleted=deleteUserById(Number(req.params.id));
    deleted?res.status(204).send("user deleted success"):res.status(404).send("user not found")
})


export default router;