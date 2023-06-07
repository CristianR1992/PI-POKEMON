import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registrarse,} from '../../redux/actions'
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import validaciones from './Validaciones';


const Register = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, setRegister] = useState({ nickname: '', email: '', password: '' })
  const [error, setError] = useState({ nickname: '', email: '', password: '' })

  const handleChange = (event) => {

    setRegister(() => ({
      ...register,
      [event.target.name]: event.target.value
    }));

    const fieldError = validaciones({ ...register, [event.target.name]: event.target.value });

    setError(() => ({
      ...error,
      [event.target.name]: fieldError[event.target.name] // Accede al mensaje de error específico por el nombre del campo
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const registerResponse = await dispatch(registrarse(register));
      console.log(registerResponse.payload.access);
      if (registerResponse.payload.access === true) {
        navigate('/home');
      } else {
        alert("Usuario ya registrado con ese email");
      }
    } catch (error) {
      
    } alert("Usuario ya registrado con ese email");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.box}>
            <Link to="/"><button className={styles.buttonBack}>⬅</button></Link>
            <h1 className={styles.title}>Bienvenido al Registro</h1>
            <label htmlFor="nickname">Nickname: <input type="text" name="nickname" value={register.nickname} onChange={handleChange} /></label>
            {error.nickname && <p> {error.nickname}</p>}

            <label htmlFor="email">Email: <input type="text" name="email" value={register.email} onChange={handleChange} /></label>
            {error.email && <p> {error.email}</p>}

            <label htmlFor="password"> Password <input type="password" name="password" value={register.password} onChange={handleChange} /></label>
            {error.password && <p> {error.password}</p>}

            <br />
            <button className={styles.button} type="submit">Registrarse</button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default Register;
