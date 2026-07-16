import {asynchandler} from '../utils/asynchandler.js';

const registerUser = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "register done"
  })
})

const login = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "login done"
  })
})

export { registerUser, login };