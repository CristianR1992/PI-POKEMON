import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getTypes, createPokemon } from '../../redux/actions'
import validation from './validationes.js'
import styles from './FormCreate.module.css'


const FormCreate = () => {
    const types = useSelector((state) => state.types)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: '',
        attack: 50,
        defense: 50,
        life: 50,
        image: '',
        speed: 50,
        height: 50,
        weight: 50,
        types: []
    })

    const [error, setError] = useState({
        name: '',
        attack: '',
        defense: '',
        life: '',
        image: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value //si no conozco el nombre de la propiedad, accedo con el []
        })
        setError(
            validation({
                ...form,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleTypeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setForm((prevForm) => ({
                ...prevForm,
                types: [...prevForm.types, value],
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                types: prevForm.types.filter((type) => type !== value),
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //para que no se recargue la pagina.
        dispatch(getTypes(event.target.value))
        dispatch(createPokemon(form))
        navigate('/home') // ver de crear otra ruta, donde este el pokemon creado...          
    }
    const resetData=(event)=>{
        event.preventDefault()
        setForm({
            name: '',
            attack: 50,
            defense: 50,
            life: 50,
            image: '',
            speed: 50,
            height: 50,
            weight: 50,
            types: []
        })
        setError({
            name: '',
            attack: '',
            defense: '',
            life: '',
            image: '',
            speed: '',
            height: '',
            weight: '',
            types: []
        })

    }

    return (
         
    
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <button onClick={resetData}className={styles.submitButton}>Data reset</button>
            <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>Name:  <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} /></label>
                {error.name && <p className={styles.errorName}> {error.name}</p>}
            </div>
            <div className={styles.sliderContainer}>
                <div>
                    <label htmlFor="life" className={styles.label}>Life:     {form.life}<input type="range" name="life" min="0" max="100" value={form.life} onChange={handleChange} className={styles.slider} /></label>
                    <label htmlFor="attack" className={styles.label}>Attack:  {form.attack}<input type="range" name="attack" min="0" max="100" value={form.attack} onChange={handleChange} className={styles.slider} /> </label>
                    <br />
                    <label htmlFor="defense" className={styles.label}>Defense: {form.defense}<input type="range" name="defense" min="0" max="100" value={form.defense} onChange={handleChange} className={styles.slider} /> </label>
                    <label htmlFor="speed" className={styles.label}>Speed: {form.speed}<input type="range" name="speed" min="0" max="100" value={form.speed} onChange={handleChange} className={styles.slider} /></label>
                    <br />
                    <label htmlFor="height" className={styles.label}>Heigth:  {form.height}<input type="range" name="height" min="0" max="100" value={form.height} onChange={handleChange} className={styles.slider} /> </label>
                    <label htmlFor="weight" className={styles.label}>Weigth: {form.weight}<input type="range" name="weight" min="0" max="100" value={form.weight} onChange={handleChange} className={styles.slider} /></label>
                </div>
            </div>

            <label htmlFor="types" className={styles.label}>Select your types: </label>
            <div className={styles.checkboxContainer}>
                {types.map((type) => (
                    <label key={type.name} className={styles.types}>
                        <input type="checkbox" name="types" checked={form.types.includes(type.name)} value={type.name} onChange={handleTypeChange} />  {type.name} </label>))}
                {error.types && <p style={{ color: 'red' }}> {error.types}</p>}</div>

            <label htmlFor="image"className={styles.label}>Image URL :  <input type="url" name="image" value={form.image} onChange={handleChange} /></label>
            {error.image && <p style={{ color: 'red' }}> {error.image}</p>}

            <button className={styles.submitButton} disabled={Object.keys(error).length > 0} type="submit">Create Pokemon</button>

        </form>
    )
}

export default FormCreate;
