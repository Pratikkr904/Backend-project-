import dns from 'dns';
import dotenv from "dotenv";
import connectdb from "./db/index.js";
import app from "./app.js";

dns.setServers(['8.8.8.8', '1.1.1.1']);

dotenv.config({
  path: './.env'
})

connectdb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT || 8000}`)
    })
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  })


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