import React from 'react'
//LOGOS
import flask from '../assets/img/flask.png'
import python from '../assets/img/python.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/javascript.png'
import react from '../assets/img/react.png'
import mysql from '../assets/img/mysql.png'
import git from '../assets/img/git.png'
import bs from '../assets/img/bs.png'
import tux from '../assets/img/tux.png'
import scapy from '../assets/img/scapy.png'
import sqlite from '../assets/img/sqlite.png'


export default function Skils() {

    return (
        <div className="center">

            <div className="desc card_header">
                <h1>Lenguajes, sistemas y frameworks utilizados</h1>
            </div>

            <div className="grid_skills desc">   

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={python}/>
                        </div>
                        <div>
                            <p>
                            Es de los lenguajes que mas uso. Todos los backends de los proyectos que hice estan hechos con Python. Me siento comodo utilizando este lenguaje.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                <div>
                    <div className="title">
                        <img src={flask}/>
                    </div>
                    <div>
                        <p>
                            El modulo de Flask es muy practico. Es minimalista y rapido, por eso aprendi a utilizarlo. Gracias a este modulo pude implemetar el sistema de tokens JWT (Json Web Tokens), utilizando Flask-JWT-Extended.
                        </p>
                    </div>
                </div>
                </div>

                <div className="card">
                <div>
                    <div className="title">
                        <img src={html}/>
                    </div>
                    <div>
                        <p>
                            Es el primer lenguaje que aprendi, y que sigo utilizando hasta hoy en dia.
                        </p>
                    </div>
                </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={css}/>
                        </div>
                        <div>
                            <p>
                                Me gusta trabajar mis propios estilos. Css te da muchas herramientas para crear y darle una buena apariencia a la web!.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={js}/>
                        </div>
                        <div>
                            <p>
                                Es el tercer lenguaje que aprendi. Lo primero que hice fueron funciones simples (con fines esteticos y funcionales). Luego, empece  a experimentar con React Js.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={react}/>
                        </div>
                        <div>
                            <p>
                                Lo uso actualmente para crear paginas y aplicaciones web. Lo elegi luego de probar otros frameworks como  Svelte y Vue Js. Constantemente estoy aprendiendo acerca de su uso.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={tux}/>
                        </div>
                        <div>
                            <p>
                              Amo Linux. Actualmente lo utilizo como sistema operativo principal. Probe varias distribuciones, desde Ubuntu y sus derivados (Xubuntu, Ubuntu Mate, Lubunut), Debian, Kali Linux, ElementarY OS, y Manjaro MATE (Basada en ArchLinux)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div >
                        <div className="title">
                            <img src={git}/>
                        </div>
                        <div>
                            <p>
                                Desde que aprendi a usarlo me ahorro mucho tiempo. Es muy practico, y mas para trabajar en equipo
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={mysql}/>
                        </div>
                        <div>
                            <p>
                                Es la base de datos que suelo usar en los proyectos que hago. Es facil de gestionar con PhpMyAdmin
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={bs}/>
                        </div>
                        <div>
                            <p>
                                Este framework de css lo utilice muchas veces. Ahorra mucho tiempo y permite hacer aplicaciones responsivas de forma sencilla
                            </p>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div>
                        <div className="title">
                            <img src={scapy}/>
                        </div>
                        <div>
                            <p>
                                Permite trabajar con paquetes de red. Tiene muchas funcionalidades que le dan una gran posibilidad de usos.
                            </p>
                        </div>
                    </div>
                </div> 


                <div className="card">
                    <div>
                        <div className="title">
                            <img src={sqlite}/>
                        </div>
                        <div>
                            <p>
                                Es la primera base de datos que aprendi a utilizar. Me resulto muy sencillo de aprender.
                            </p>
                        </div>
                    </div>
                </div> 
                
                
                


            </div>
            

            

            
            

        </div>
    )
}
