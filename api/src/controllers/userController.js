const { User } = require('../db.js');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      throw new Error('Credenciales inválidas'); // El usuario no existe en la base de datos
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    return { access: true, token };
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};

const validateToken = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
  }

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return res.status(200).json({ validate: true, decodedToken });
  } catch (error) {
    return res.status(401).json({ validate: false });
  }
};


const register = async (nickname, email, password) => {
  try {
   
    const userRegistered = await User.findOne({
      where: { email: email },
    });
    if (userRegistered) {
      throw new Error('Ya existe un usuario registrado con ese email');
    }
    const newUser = await User.create({
      nickname,
      email,
      password,
    });
    return {access:true};
  } catch (error) {
    throw new Error('Error al registrar al usuario');
  }
};

module.exports = {
  login,
  register,
  validateToken,
};
