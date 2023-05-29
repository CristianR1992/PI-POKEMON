import {useState } from 'react';
import {useNavigate } from 'react-router-dom';
import {useDispatch } from "react-redux";
import {registrarse} from'../../../redux/actions'
import styles from './Register.module.css';


const Register = () => {

const navigate= useNavigate()
const dispatch= useDispatch()
const[register, setRegister]= useState({nickname:'', email:'', password:''})


  const handleChange= (event)=>{
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }
const handleSubmit= (event)=>{
  event.preventDefault()
  dispatch(registrarse(register))
  navigate('/home')
}
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
         <h1 className={styles.title}>Bienvenido al Registro</h1>        
        <label htmlFor="nickname">Nickname: <input type="text" name="nickname"value={register.nickname}onChange={handleChange} /></label> 
        <br/>
        <label htmlFor="email">Email: <input type="text" name="email" value={register.email} onChange={handleChange}/></label>
        <br/>
        <label htmlFor="password"> Password <input type="password" name="password" value={register.password} onChange={handleChange} /></label>
        <br/>
       
        <br/>
        <button className={styles.button} type="submit">Registrarse</button>
      </div>
      </div>
    </div>
   
  </form>
  )
}

export default Register;
