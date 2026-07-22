import {asynchandler} from '../utils/asynchandler.js';
import {Apierror} from "../utils/Apierror.js";
import{User} from "../models/user.model.js";
import { uploadoncloudinary } from '../utils/cloudinary.js';
import { Apiresponse } from '../utils/Apiresponse.js';



const registerUser = asynchandler(async (req, res) => {
  const {fullname,email,username,password}=req.body
  console.log("email" ,email);
  // if(fullname ===""){
    // throw new  Apierror(400,"fullname is required")//1st method for taking for the error
  // }
  if([fullname,email,username,password].some((field)=>field?.trim()===""))
    {
      throw new Apierror(400,"all fields are required")
  }
  const existedUser=User.findOne({
    $or:[{email},{username}]
  
  })
  if(existedUser){
    throw new Apierror(409,"user already exists ")
  }

  const avatarlocalpath=req.files?.avatar[0]?.path;
  const coverImagelocalpath=req.files?.coverImage[0]?.path;
  if(!avatarlocalpath){
    throw new Apierror(400,"avatar is required")

  }
  const avatar= await uploadoncloudinary(avatarlocalpath)
  const coverImage= await uploadoncloudinary(coverImagelocalpath)
  if(!avatar){
    throw new Apierror(400,"avatar upload failed")

  }
  const user=await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    username:username.toLowerCase(),
    password

  })
  const createduser=await User.findById(user._id).select("-password -refreshToken")
  if(!createduser){
    throw new Apierror(500,"something went error while registering ")


  }

  return res.status(201).json(
    new Apiresponse(200,"user registered successfully",createduser)
    
  )
})


const login = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "login done"
  })
})


export { registerUser, login };