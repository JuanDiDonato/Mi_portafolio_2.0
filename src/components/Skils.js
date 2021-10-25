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
import node from '../assets/img/node.png'
import sqlite from '../assets/img/sqlite.png'
import steam from '../assets/img/steam.png'
import discord from '../assets/img/discord.png'
import instagram from '../assets/img/instagram.png'
import spotify from '../assets/img/spotify.png'
import coingecko from '../assets/img/coingecko.png'
import mercadoPago from '../assets/img/mercadoPago.png'

export default function Skils() {

    return (
        <div className="center">

            {/*API'S*/}
            <div className="card_proj margin">
                <div className='title'>
                    <h2>Manejo de API's</h2>
                </div>
                <div>
                    <div className="desc">
                        <p>
                            Tengo experiencia en el manejo y la creacion de API's.
                            Trabaje con la API de Steam, Instragram, Coingecko, 
                            Spotify, Mercado Pago, Discord, entre otras.
                        </p>
                    </div>
                </div>
            </div>

            {/*LOGOS DE API'S*/}
            <div>
                <img className="logos" src={steam} alt="steam" />
                <img className="logos" src={discord} alt="steam" />
                <img className="logos" src={spotify} alt="steam" />
                <img className="logos" src={instagram} alt="steam" />
                <img className="logos" src={coingecko} alt="steam" />
                <img className="logos" src={mercadoPago} alt="steam" />
            </div>

            <div className="desc card_proj">
                <h2>Lenguajes, sistemas y frameworks utilizados</h2>
            </div>

            <div className="grid_skills desc">   

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={node}/>
                        </div>
                        <div>
                            <p>
                                Node js lo utilizo hace tiempo, para crear y utilizar API's, y para 
                                el desarrollo backend en aplicaciones web. Utilizo el framework de Express,
                                implementando Json Web Tokens.
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
                                Es el tercer lenguaje que aprendi. Lo primero que hice fueron funciones simples 
                                (con fines esteticos y funcionales). Luego, lo utilice en el trabajo de backend, con Node js.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="title">
                            <img src={python}/>
                        </div>
                        <div>
                            <p> 
                            Me siento comodo utilizando este lenguaje,
                            se me hizo facil de aprender y
                            lo utilice para varios proyectos.
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
                            El modulo de Flask es muy practico.
                            Lo utilice con Python para trabajar backend, implementando JWT.
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
                            Es el primer lenguaje que aprendi, 
                            y que sigo utilizando hasta hoy en dia.
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
                                Me gusta trabajar mis propios estilos, por eso aprendi css.
                                Realmente no soy muy apacionado para crear la estetica de la web,
                                pero me gusta mas que utilizar frameworks, si dispongo del tiempo.
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
                                Lo uso actualmente para crear paginas y aplicaciones web. 
                                Lo elegi luego de probar otros frameworks como  Svelte y Vue Js. 
                                Constantemente estoy aprendiendo acerca de su uso.
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
                              Amo Linux. Actualmente lo utilizo como sistema operativo principal. 
                              Probe varias distribuciones, desde Ubuntu y sus derivados 
                              (Xubuntu, Ubuntu Mate, Lubunut), 
                              Debian, Kali Linux, ElementarY OS, y Manjaro MATE (Basada en ArchLinux)
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
                                Desde que aprendi a usarlo me ahorro mucho tiempo. 
                                Es muy practico, y mas para trabajar en equipo
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
                                Es la base de datos que suelo usar en mis proyectos. 
                                Llevo bastante tiempo utilizandola y tengo experiencia en ella.
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
                                Este framework de css lo utilice muchas veces. 
                                Ahorra mucho tiempo y permite hacer aplicaciones web y paginas web adaptables 
                                a varios tipos de dispositivos de forma sencilla.
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
                                Es la primera base de datos que aprendi a utilizar. 
                                Me resulto muy sencillo de aprender.
                            </p>
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>
    )
}
