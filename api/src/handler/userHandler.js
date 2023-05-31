const { login, register } = require('../controllers/userController');

const loginHandler = async (req, res) => {
const {email,password} = req.body 
try {
     const userLogin = await login(email,password);
  res.status(200).json(userLogin);
  console.log(userLogin)
} catch (error) {
    res.status(400).json({error:error.message})
}
 
};

const registerHandler = async (req, res) => {
  const {nickname,email,password} = req.body 
try {
    const userRegister = await register(nickname,email,password);
  res.status(200).json(userRegister);
} catch (error) {
    res.status(400).json({error:error.message})
}
}


module.exports = {
  loginHandler,
  registerHandler
};

