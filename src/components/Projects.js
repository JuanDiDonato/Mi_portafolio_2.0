import React from 'react'

export default function Projects() {



    return (
        <div className="center">
            <div className="card_header desc margin">
                <h3>Estos son algunos proyectos que realice desde que estoy programando. 
                    ¡Estan subidos a GitHub!
                </h3>
            </div>

            <div className="projects">

                {/*E-Commerce*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>E-Commerce</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                    El proyecto comenzo con la idea de crear una plataforma online 
                                    donde los emprendedores de pequeños negocios puedan mostrar y vender 
                                    sus productos. Cuenta con funciones como la posibilidad de 
                                    crear publicaciones subiendo fotos, definir y planificar ofertas,
                                    ver estadisticas de ventas y recaudacion,
                                    entre otras. Los clientes pueden abonar con tarjeta gracias a la API 
                                    de Mercado Pago.

                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/JuanDiDonato/E-Commerce" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*E-Commerce django rest*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>Backend e-commerce con DJango REST</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                    Es una version hecha con DJango REST Framework del backend del ecommece.
                                    Tiene el soporte de pagos con Mercado Pago, JWT, Cookies, etc. 
                                    Es una version mas planificada y optimizada.
                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/JuanDiDonato/Ecommerce-Backend-DjangoRESTFramework" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*Bot de telegram*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>Bot de Telegram</h2>
                    </div>
                    <div className="desc">
                        <p>
                        Es un bot que busca en youtube lo que escribas, lo conviert a mp3,
                        y lo envia como un audio por el chat!
                        </p>
                    </div>
                    <div className="butom title"><a href="https://github.com/JuanDiDonato/Telegram-Bot" target="null"><h4>Ver codigo</h4></a></div>
                </div>

                {/*Lo de pochi sublimaciones*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>Lo de Pochi- Sublimaciones</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                    Es una pagina web realizada para una emprendedora,
                                     en colaboracion con Francisco Medina. La pagina muestra los 
                                     productos/trabajos que ofrece, gracias a la API de Instagram
                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/franmedi99/lodepochi-sublimaciones" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*Notitapps*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>Notitapps</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                Es una aplicacion de notas. 
                                El usuario puede organizar su dia facilmente creando practicas notas, 
                                que puede editar y eliminar cuando lo necesite. 
                                Debe registrarse para poder utilizarla.
                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/JuanDiDonato/Notitapps" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*Api-Node-Coingecko*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>Node-Coingecko</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                Es una aplicacion web donde el usuario, luego de registrarse,
                                puede buscar todas las criptomonedas, guardarlas como favoritas, 
                                y obtener mucha informacion
                                relevante sobre las mismas, incluido graficos, hechos con Chart.js,
                                y pose funcionalidad
                                Drag and Drop.
                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/JuanDiDonato/Api-Node-Coingekco" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*Api-Node-Express*/}
                <div className="card_proj">
                        <div className='title'>
                            <h2>Api-Rest-Node</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                Es una Api que registra usuarios, y los guarda en una base de datos. 
                                Posee las consultas tipicas de crear, editar, y borrar datos, 
                                grupalmente o por id.
                                Utiliza Express y MySQL.
                                </p>
                                <div className="butom title">
                                    <a href="https://github.com/JuanDiDonato/Api-Node-Coingekco" target="null"><h4 >Ver codigo</h4></a>
                                </div>
                            </div>
                        </div>
                </div>

                {/*ARP Spoofer*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>ARP Spoofer</h2>
                    </div>
                    <div className="desc">
                        <p>
                            O tambien conocido como "Man in the midle".
                            Lo programe como parte de una practica de hackin etico. 
                            Para el mismo se utilizo Python y el modulo Scapy.
                        </p>
                    </div>
                    <div className="butom title"><a className="butom title" href="https://github.com/JuanDiDonato/Man_in_the_midle" target="null"><h4>Ver codigo</h4></a></div>
                </div>

                {/*API-Python-Coingecko*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>API-Python-Coingecko</h2>
                    </div>
                    <div className="desc">
                        <p>
                            Trabaja con la API de Coingekco. Posee multiples funciones que permiten 
                            obtener todos los datos de una (o todas) las criptomonedas. 
                            Un usuario puede tener su propio
                            top 10 de criptomonedas, y organizarlas por su valor actual de mercado.
                        </p>
                    </div>
                    <div className="butom title"><a href="https://github.com/JuanDiDonato/Python-Coingecko" target="null"><h4>Ver codigo</h4></a></div>
                </div>

                {/*API-Python-JWT*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>API-Python-Flask-JWT</h2>
                    </div>
                    <div className="desc">
                        <p>
                        Es una Api que registra usuarios, y los guarda en una base de datos. Posee las consultas tipicas de crear, editar, y borrar datos, grupalmente o por id.
                        Utiliza SQLite3, aunque en mi Github hay otra Api que funciona igual, pero con MySQL.
                        </p>
                    </div>
                    <div className="butom title"><a href="https://github.com/JuanDiDonato/API-Python3-Flask-SQLITE" target="null"><h4>Ver codigo</h4></a></div>
                </div>

                {/*Proclean*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>Proclean</h2>
                    </div>
                    <div className="desc">
                        <p>
                        Fue un proyecto en colaboracion con Francisco Medina,
                         en el que realice las vistas de la aplicacion, y sus funcionalidades,
                          aplicando por primera vez metodologias agiles como SCRUM
                        </p>
                    </div>
                    <div className="butom title"><a href="https://github.com/JuanDiDonato/proclean" target="null"><h4>Ver codigo</h4></a></div>
                </div>

            </div>
        </div>
    )
}
