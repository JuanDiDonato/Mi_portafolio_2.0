import React from 'react'

export default function Info() {
    return (
        <div className="center">
            {/*Sobre mi*/}
            <div className="card_proj">
                        <div className='title'>
                            <h2>Sobre mi</h2>
                        </div>
                        <div>
                            <div className="desc">
                                <p>
                                Me recibi de Tecnico Maestro Mayor de Obras en la E.E.S.T Nº3 (Tecnica 3) en el 2019. Luego de recibirme, me anote en Arquitectura y en Ing.Naval, en la UTN. Decidi cursar esta ultima. Ingrese en el 2020 y realice mi primer año de forma virtual. Curse 8 materias y pude aprobarlas. En mi segundo año en la universidad me di cuenta que no era la carrera que me apasionaba.
                                </p>
                            </div>
                        </div>
                </div>

                {/*Pasatiempos*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>Pasatiempos</h2>
                    </div>
                    <div className="desc">
                        <p>
                        Cuando no estoy programando, en mis tiempos libres, me gusta hacer actividad fisica, caminar y andar en bici. Soy aficionado al ciclismo, me gusta hacer viajes largos, y arreglar mi propia bici cuando es necesario. Espero algun dia tener una bici de carretera, y hacer grandes travesias!. Tambien, de vez en cuando, juego con amigos en linea para pasar el rato
                        </p>
                    </div>
                </div>

                {/*objetivos*/}
                <div className="card_proj">
                    <div className='title'>
                        <h2>Objetivos</h2>
                    </div>
                    <div className="desc">
                        <p>
                        A corto plazo quiero aprender todo lo posible de Python y JavaScript, que son los lenguajes que estoy usando, y conseguir un trabajo. A mediano plazo, mi objetivo es irme a estudiar Ingenieria en Sistemas a la UNICEN, en Tandil, donde espero obtener una beca para costear mis estudios, gracias a mi promedio en la UTN. En un futuro, mi meta es trabajar y seguir aprendiendo, la programacion, y la informatica en general es muy amplia, ¡hay mucho para aprender y crear!
                        </p>
                    </div>
                </div>
            
            <div className="card_info">
                <div className="title">
                    <h2>Estoy por aca :P</h2>
                </div>
                <div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12571.116026325375!2d-57.56921081219479!3d-38.02893118291705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1630710869137!5m2!1ses!2sar"></iframe>
                </div>
            </div>
            

            {/*Enlaces*/}
            <div className="enlaces">
                <div className="title links_social instagram">
                    <a href="https://www.instagram.com/juan_didonato/?hl=es-la"><h3>Instagram</h3></a>
                </div>
                <div className="title links_social telegram">
                    <a href="https://t.me/Juan_didonato"><h3>Telegram</h3></a>
                </div>
                <div className="title links_social github">
                    <a href="https://github.com/JuanDiDonato"><h3>Github</h3></a>
                </div>
                <div className="title links_social linkedin">
                    <a href="https://www.linkedin.com/in/juandidonato/"><h3>Linkedin</h3></a>
                </div>
            </div>

        </div>
    )
}
