import React from 'react'
import { Link } from 'react-router-dom'
//CSS
import '../assets/css/animations.css'

export default function Header() {
    return (
        <div className="center">
            <div className="header">
                <div className="title">
                    <h1>Juan Di Donato</h1>
                    <h3><i>Desarrollador profesional junior</i></h3>
                </div>
                <div className="menu desc">
                <div className="butom"><Link to='/'>Inicio</Link></div>
                <div className="butom"><Link to='/projects'>Trabajos</Link></div>
                <div className="butom"><Link to='/skills'>Habilidades</Link></div>
            </div>
            </div>
        </div>
    )
}
