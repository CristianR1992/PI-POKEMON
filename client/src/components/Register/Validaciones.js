const validaciones =(register)=>{
    let error ={};
 const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
 const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{6,})$/
if(!register.nickname){
        error.name="Este campo es obligatorio"
    }

if(register.nickname.length >20){
    error.nickname ="El Nickname no puede superar los 20 caracteres"

}

if(register.email.length > 35) {
    error.email = "El email no puede superar los 35 caracteres";}

 if (!regexEmail.test(register.email)) {
    error.email = "Debe ser un correo electrónico";
  }
  if (!regexPassword.test(register.password)) {
    error.password = "Se requiere al menos un numero , un caracter especial y una longitud de 6 caracteres ";
  }
 return error;

}

export default validaciones;