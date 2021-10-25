import React from 'react'
import { Link } from 'react-router-dom'
//CSS
import '../assets/css/animations.css'

export default function Header() {
    return (
            <div className="header">
                <div className="title">
                    <h1>Juan Di Donato</h1>
                    <h3>Backend developer</h3>
                    <div className="menu desc">
                        <div className="butom"><Link to='/Mi_portafolio_2.0'>Inicio</Link></div>
                        <div className="butom"><Link to='/projects'>Trabajos</Link></div>
                        <div className="butom"><Link to='/skills'>Habilidades</Link></div>
                    </div>
                </div>
                

            </div>
    )
}
