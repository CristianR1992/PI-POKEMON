import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginFn } from '../../redux/actions'
import styles from './Login.module.css'
import { Link } from "react-router-dom"



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, setLogin] = useState({ email: '', password: '' })
 

    const handlerChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }
    const handlerSubmit =async (event) => {
        event.preventDefault()
      try {
        const loginResponse =await dispatch(loginFn(login))
       if(loginResponse.payload.access === true){
        navigate('/home')
      }  
      } catch {
         alert("Algun dato es invalido")
      }
    }

    return (
    <form onSubmit={handlerSubmit}>
        <div className={styles.background}>
             <div className={styles.container}>
                 <div className={styles.box}> 
                 <Link to="/"><button className={styles.buttonBack}>⬅</button></Link>
                 <h1 className={styles.title}>Ingrese sus Datos</h1>
                 <label htmlFor="email">Email: <input type="text" value={login.email} name="email" onChange={handlerChange} /></label>
            <br />
                 <label htmlFor="password">Password: <input type="password" name="password" value={login.password} onChange={handlerChange} /></label>
             <br />

             <br />
                  <button className={styles.button} type="submit">Login</button>
                 
               
                 </div>
            </div>
         </div>
     </form>
    )
}

export default Login