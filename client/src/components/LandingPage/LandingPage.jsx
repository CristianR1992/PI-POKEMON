import React from 'react'
import {Link} from 'react-router-dom'

const LandindPage=()=>{
   return (
   <div>
        <h1>BIENVENIDOS A MI PI POKEMON</h1>
        <Link to ='/home'>
            <button>Ingresar</button>
        </Link>
    </div>
)
}

export default LandindPage