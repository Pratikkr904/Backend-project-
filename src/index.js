// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js"
import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
 import connectdb from "./db/index.js";
 import dotenv from "dotenv";

 dotenv.config({
  path:'./.env'
})
connectdb()


// import express from "express"
// const app=express()
// (async()=>{
//   try{
//      await mongoose.connect('${process.env.MONGO_URL}/${DB_NAME')
//     app.on("error",(error)=>{
//       console.log("ERROR",error);
//       throw error
//     })
//     app.listen(process.env.PORT,()=>{
//       console.log('app is listening on port ${process.env.PORT}');
//     })
//   }catch(error){
//     console.log(error);
//     throw err
//   }
//   }
// )()