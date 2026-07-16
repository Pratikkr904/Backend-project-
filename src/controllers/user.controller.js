import {asynchandler} from '../utils/asynchandler.js';

const registerUser = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "register ok"
  })
})

const login = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "login ok"
  })
})

export { registerUser, login };