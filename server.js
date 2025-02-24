const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/",()=> console.log("Server is Running Successfully"));

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost/${PORT}`)
})

Users =[
    {id: 1, name : "Sujay", role: "Student", address : "Ambattur"},
    {id: 1, name : "Saanvi", role: "Student", address : "Saidapet"},
    {id: 1, name : "Oviya", role: "Teacher", address : "Coimbatore"}
]

app.get("/user/:id",async(req,res)=>{
    try{
        const {id} = req.body.id;
        if(!id){
            return res.status(400).json({message: "User parameter cannot be empty"});
        }
        const user = Users.find((u)=>u.id == id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(201).json({message: "User found", userDetails : user});
    }
    catch(error){
        res.status(500).json({message:"User not found",error: error.message})
    }
})