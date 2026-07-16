import {asynchandler} from '../utils/asynchandler.js';

const registerUser=asynchandler(async(requestAnimationFrame,res)=>{
  response.status(200).json({
    message:"ok"
  })
})


export {registerUser};