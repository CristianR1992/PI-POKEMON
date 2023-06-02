const { login, register,validateToken } = require('../controllers/userController');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userLogin = await login(email, password);
    res.status(200).json(userLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const validateTokenHandler = async (req, res) => {
  try {
    const token = await validateToken()
    res.status(200).json(token)
  } catch (error) {
    res.status(500).json("Error con el token");
  }
};

const registerHandler = async (req, res) => {
  const { nickname, email, password } = req.body;
  try {
    const userRegister = await register(nickname, email, password);
    res.status(200).json(userRegister);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginHandler,
  registerHandler,
  validateTokenHandler
};
