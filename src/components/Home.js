import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import team from '../assets/img/teamwork.png'
import idea from '../assets/img/idea.png'
import calendar from '../assets/img/calendar.png'
import programmer from '../assets/img/programmer.png'




export default function Home() {

    return (
        <div className="center" >
            {/*Aptitudes*/}
            <div className="home">
            
                    {/*Iniciativa*/}
                    <div className="inline_left">
                        <div>
                            <div className="card_home title left d_left">
                                <h2>Iniciativa</h2>
                                <div className='title'>
                                    <h3>Tengo muchas ganas de trabajar y seguir aprendiendo. Constantemente pienso en posibles proyectos que puedan solucionar los problemas cotidianos
                                        que nos encontramos en la web, y en nuestras aplicaciones diarias!
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="pc_img">
                                <img src={idea} alt="" />
                        </div>
                    </div>
                    
                    {/*Trabajo en equipo*/}
                    <div className="inline_right">
                        <div className="pc_img">
                                <img src={team} alt="" />
                        </div>
                        <div>
                        <div className="card_home title right d_right">
                            <h2>Trabajo en equipo</h2>
                                <div className="title">
                                    <h3>Me gusta trabajar en equipo con personas apasionadas y comprometidas con la programacion. Cuando tengo una idea,
                                         me gusta compartirla com mi grupo de trabajo y debatir sobre ella!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gestion de tiempos*/}
                    <div className="inline_left">
                        <div>
                        <div className="card_home title left d_left">
                            <h2>Gestion de tiempos</h2>
                                <div className='title'>
                                    <h3>Soy muy organizado, suelo gestionar bien los tiempos de las actividades que realizo durante el dia. Me gusta definir una "hoja de ruta" con las cosas que tengo que hacer, priorisando actividades importantes.</h3>
                                </div>
                        </div>
                        </div>
                        <div className="pc_img">
                                <img src={calendar} alt="" />
                        </div>
                    </div>
                    
                    
                    {/*Motivacion*/}
                    <div className="inline_right">
                        <div className="pc_img">
                                <img src={programmer} alt="" />
                        </div>
                        <div>
                        <div className="card_home title right d_right">
                            <h2>Motivacion</h2>
                                <div className="title">
                                    <h3>¡Estoy motivado!. La programacion me encanta, hay mucho por hacer, y por aprender a hacer. Quiero expandir mis horizontes, para hacer proyectos mas grandes, con mejor experiencia de usuario y funciones imnovadoras.</h3>
                                </div>
                        </div>
                        </div>
                    </div>
                    
                    
            </div>
            {/*Sobre mi*/}
            <div>
                <div className="title border-top">
                    <h1><i>¿Quien soy?</i></h1>
                </div>
                <div className="title info">
                    <h3>
                        ¡Me gusta la programacion! Desde agosto de 2021 decidi dedicarme a la programacion.
                        Pensando en el futuro, tengo objetivos y metas a cumplir!
                    </h3>
                    <div className="links"><Link to='/info'><h3>¡Conoceme!</h3></Link></div>
                </div>
            </div>
        </div>
    )
}
