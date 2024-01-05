import { Flex, Image } from "antd"
import portada from '../../../assets/img/job_experience/anglo/anglo.png'
import login from '../../../assets/img/job_experience/anglo/login.png'
import inicio from '../../../assets/img/job_experience/anglo/inicio.png'
import jugadores from '../../../assets/img/job_experience/anglo/listadodejugadores.png'
import jugador from '../../../assets/img/job_experience/anglo/jugador.png'
import equipos from '../../../assets/img/job_experience/anglo/equipos.png'
import cobranzas from '../../../assets/img/job_experience/anglo/cobranzas.png'
import php from '../../../assets/img/knoweldge_tech/PHP-logo.png'
import laravel from '../../../assets/img/knoweldge_tech/laravel.png'
import javascript from '../../../assets/img/knoweldge_tech/JavaScript-logo.png'
import angular from '../../../assets/img/knoweldge_tech/Angular.png'
import bootstrap from '../../../assets/img/knoweldge_tech/bootstrap-logo.png'
import sql from '../../../assets/img/knoweldge_tech/SQL-logo.png'

export const AngloJob:React.FC = () =>{
    return (
        <Flex gap={10} style={{color:'white'}}>
            <div className="jobdescription">
                <div className="descriptionAnglo">
                    <p>Paralelamente mientras me encontraba trabajando en el sistema del colegio tambien se me encargo darle mantenimiento a un sistema de un club de futbol,
                    este mismo semanalmente se juegan partidos por torneos dependiendo de la categoria en la que el club se encuentre, pemitiendo asi que los usuarios unicamente
                    pertenezcan a un club y una categoria. Como todo torneo de futbol, hay arbitros y sanciones que debian ser manejadas, y cuotas para los afiliados.</p>
                    <p>Llegada a una cierta cantidad de tarjetas amarillas el mismo debia pagar una multa y quedaba sancionado por conducta a X cantidad de fechas a disputar. 
                    Tambien se debian manejar las facturas y pagos de socios, si un socio se atrasaba en un pago debia aparecer una advertencia una vez que ingresaba con su carnet (tambien diseñado
                    por nosotros) y a este no permitiendole disputar un partido.</p>
                    <p>Cada jugador podia retirarse de su equipo y cambiarse a otro y no necesariamente tenia que ser de la misma categoria, podia tambien cambiarse de equipo y categoria.
                    El mismo sistema manejaba los scores de cada equipo y jugador, registrando asi la cantidad de goles que se hizo durante todo el torneo, tanto del jugador como del equipo completo.</p>
                    <p><b>Las tecnologias que se utilizaron para desarrollar este sistema fueron:</b> PHP y Laravel para el Back End, AngularJS para el Front End utilizando la libreria Bootstrap y una base de datos SQL con DER incluido.</p>
                </div>
            </div>
            <div className="imagesAnglo">
                <p><b>Carousel de imagenes del proyecto</b></p>
                <Image.PreviewGroup
                    items={[ portada, login, inicio, jugadores, jugador, equipos, cobranzas ]}
                >
                    <Image
                        width={700}
                        src={portada}
                    />
                </Image.PreviewGroup>
                <div className="technologies">
                    <h3>Tecnologias utilizadas</h3><br/>
                    <Flex gap={10} justify="center">
                        <Image src={php} style={{ width: '130px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={laravel} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={javascript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={angular} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={bootstrap} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={sql} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                    </Flex>
                </div>
            </div>
        </Flex>
    )
}