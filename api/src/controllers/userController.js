const {User } = require('../db.js')

const login = async (email,password) => {
      
    try {
     
      const user = await User.findOne({ where: { email, password } });
      if (!user) {
        throw new Error("Credenciales inválidas"); // El usuario no existe en la base de datos
        } 
        console.log("Login Exitoso")
         return ({ access: true })
     
    } catch (error) {
      throw new Error("Error al iniciar sesion");
    }
  };
  
  
  const register = async (nickname,email,password) => {
    try {
        if(!nickname ||!email || !password) throw new Error("Faltan datos obligatoios")
    const userRegistered = await User.findOne({
        where:{email:email}
    });
    if(userRegistered){
        throw new Error ("Ya existe un usuaruio registrado con ese email")
    }
    const newUser= User.create({
        nickname,
        email,
        password
    })
    return newUser
    } catch (error) {
        return ({error:error.message})
    }
  };
  
  module.exports = {
    login,
    register
  };
  