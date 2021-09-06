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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptas numquam, vel iste eveniet veritatis. Error eaque, illum, quos debitis explicabo, perspiciatis in dolorum ut vel fugit consectetur! Laudantium.
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptas numquam, vel iste eveniet veritatis. Error eaque, illum, quos debitis explicabo, perspiciatis in dolorum ut vel fugit consectetur! Laudantium.
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto voluptas numquam, vel iste eveniet veritatis. Error eaque, illum, quos debitis explicabo, perspiciatis in dolorum ut vel fugit consectetur! Laudantium.
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
