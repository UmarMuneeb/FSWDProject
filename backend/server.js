import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { ConnectDB } from "./config/db.js";

dotenv.config();
const app= express()
ConnectDB();
app.get("/",(req,res)=>{
    console.log("hello")
})


app.listen(5000,()=>{
    
    
    console.log("Server staarted at localhost 5000 hello")
})
