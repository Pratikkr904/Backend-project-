import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from  "jsonwebtoken";

const userSchema=new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  avatar: {
    type: String,//url
    required: true,


  },
  coverImage: {
    type: String,
  },

  watchHistory: {
    type: Schema.Types.ObjectId,
    ref: "Video"

  },
  password: {
    type: String,
    required: [true, 'password is required']

  },
  refreshToken:{
    type:String
  }
},{timestamps:true})
userSchema.pre("save",async function(next){//hooks 
  if(this.modified("password")) return next();
     next()
  
  this.password=await bcrypt.hash(this.password,10)
  next()

})

userSchema.methods.ispasswordcorrect=async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generatetoken=function(){
  return jwt.sign({
    _id:this._id,
    fullname:this.fullname,
    username:this.user,
    email:this.email
    
  },process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
)
}
userSchema.methods.generateRefreshtoken=function(){
  return jwt.sign({
    _id:this._id,
    
    
  },process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  }
)
}


  
export const User=mongoose.model("User",userSchema)