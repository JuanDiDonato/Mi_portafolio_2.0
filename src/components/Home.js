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
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic culpa dicta est nesciunt, pariatur ratione saepe sunt vel ex iure similique officia atque recusandae velit ipsum nihil suscipit quaerat?</h3>
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
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic culpa dicta est nesciunt, pariatur ratione saepe sunt vel ex iure similique officia atque recusandae velit ipsum nihil suscipit quaerat?</h3>
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
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic culpa dicta est nesciunt, pariatur ratione saepe sunt vel ex iure similique officia atque recusandae velit ipsum nihil suscipit quaerat?</h3>
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
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic culpa dicta est nesciunt, pariatur ratione saepe sunt vel ex iure similique officia atque recusandae velit ipsum nihil suscipit quaerat?</h3>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos facere dolor mollitia! Placeat dolorem perspiciatis maiores, impedit cum vel earum assumenda dolor ad doloribus quam consequuntur omnis. Quae, aliquam.
                    </h3>
                    <div className="links"><Link to='/info'><h3>¡Contactame!</h3></Link></div>
                </div>
            </div>
        </div>
    )
}
