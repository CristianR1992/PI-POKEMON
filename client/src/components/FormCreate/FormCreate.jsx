import { useState } from "react"
import { useNavigate } from "react-router-dom"
const FormCreate = ()=>{
    const navigate =useNavigate();
    const [form,setForm]= useState({
        name:'',
        // image
        life:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',})


    const handleChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value //si no conozco el nombre de la propiedad, accedo con el []
        })
    }    

    const handleSubmit =(event)=>{
        event.preventDefault(); //para que no se recargue la pagina.
        navigate('/home')
    }
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={form.name}onChange={handleChange}/>
        <hr />
        {/* <label htmlFor="image">Image: </label> 
        <input type="text" name="image"/> */}
        <hr />
        <label htmlFor="life">Life: </label>
        <input type="text" name="life"value={form.life}onChange={handleChange}/>
        <hr />
        <label htmlFor="attack">Attack: </label>
        <input type="text" name="attack"value={form.attack}onChange={handleChange}/>
         <hr />
        <label htmlFor="defense">Defense: </label>
        <input type="text" name="defense"value={form.defense}onChange={handleChange}/>
        <hr />
        <label htmlFor="speed">Speed: </label>
        <input type="text" name="speed"value={form.speed}onChange={handleChange}/>
         <hr />
        <label htmlFor="height">Heigth: </label>
        <input type="text" name="height"value={form.height}onChange={handleChange}/>
        <hr />
        <label htmlFor="weight">Weigth: </label>
        <input type="text" name="weight"value={form.weight}onChange={handleChange}/>
        <hr />
        <button type="submit">Crear Pokemon</button>
        </form>
    )
}

export default FormCreate;
// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Posibilidad de seleccionar/agregar varios tipos en simultáneo.
// Botón para crear el nuevo pokemon.