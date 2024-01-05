import { FieldTimeOutlined, GroupOutlined, ImportOutlined } from "@ant-design/icons"
import { Flex, Image, Typography } from "antd"

import portada from '../../../assets/img/job_experience/imdf/portada.png'
import imdfLogin from '../../../assets/img/job_experience/imdf/login.png'
import inicio from '../../../assets/img/job_experience/imdf/inicio.png'
import areas from '../../../assets/img/job_experience/imdf/areas.png'
import cursos from '../../../assets/img/job_experience/imdf/cursos.png'
import usuarios from '../../../assets/img/job_experience/imdf/usuarios.png'
import notas from '../../../assets/img/job_experience/imdf/notas.png'
import php from '../../../assets/img/knoweldge_tech/PHP-logo.png'
import symfony from '../../../assets/img/knoweldge_tech/symfony.png'
import javascript from '../../../assets/img/knoweldge_tech/JavaScript-logo.png'
import angular from '../../../assets/img/knoweldge_tech/Angular.png'
import bootstrap from '../../../assets/img/knoweldge_tech/bootstrap-logo.png'
import sql from '../../../assets/img/knoweldge_tech/SQL-logo.png'

const { Title } = Typography


export const ImdfJob:React.FC = () =>{
    return(
        <Flex gap={10} style={{color:'white'}}>
            <div className="images">
                <p><b>Carousel de imágenes del proyecto</b></p>
                <Image.PreviewGroup
                    items={[ portada, imdfLogin, inicio, areas, cursos, usuarios, notas ]}
                >
                <Image
                    width={700}
                    src={portada}
                />
                </Image.PreviewGroup>
                <div className="technologies">
                    <h3>Tecnologías utilizadas</h3><br/>
                    <Flex gap={10} justify="center">
                        <Image src={php} style={{ width: '130px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={symfony} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={javascript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={angular} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={bootstrap} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={sql} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                    </Flex>
                </div>
            </div>
            <div className="jobdescription">
                <Flex gap={60} >
                    <div>
                        <GroupOutlined /> - Empresa:
                        <h3>TreeMind</h3>
                    </div>
                    <div>
                        <ImportOutlined /> - Ubicación:
                        <h3>Córdoba - Argentina</h3>
                    </div>
                    <div>
                        <FieldTimeOutlined /> - Años trabajados:
                        <h3>Junio 2019 - Agosto 2022</h3>
                    </div>
                </Flex>

                <Title level={2} style={{ color:'white', marginTop:'50px', textAlign:'center' }}>Full Stack Developer</Title>
                <Title level={3} style={{ color:'white', marginTop:'50px' }}><u>Descripción</u>:</Title>
                <div className="description">
                    <p>A mediados de 2019 mientras aun me encontraba estudiando en el último año de escuela, me contacté con la empresa TreeMind para poder trabajar con ellos, 
                    el Product Manager de la misma era profesor en donde yo estudiaba, asi que no tuvo problemas en recibirme, esta fue mi primera experiencia profesional como 
                    Full Stack Developer, en la que consistía darle mantenimiento a dos de sus sistemas que ya estaban en funcionamiento.</p>
                    <p>El primero en el que trabaje fue en un sistema para un colegio, el mismo consistía en manejar roles de usuario, y dependiendo el rol, era las funcionalidades
                    que se le permitía hacer al usuario, por ejemplo, si el rol del usuario era SuperAdmin, este mismo tenia la posibilidad de crear asignaturas, cursos, cargar alumnos, 
                    profesores, preceptores, y directivos, si el rol del usuario era Profesor, este unicamente le permitía entrar para cargar notas a los usuarios que estén en su materia 
                    o asignatura. De la misma manera si el usuario era Alumno, este unicamente podia ver las notas de su año lectivo, y mensajes o actividades que el profesor les dejaba, asi como
                    las asistencias y lo que conllevara a todo el historial académico del mismo.</p>
                    <p><b>Las tecnologías que se utilizaron para desarrollar este sistema fueron:</b> PHP y Symfony para el Back End, AngularJS para el Front End utilizando la librería Bootstrap y una base de datos SQL con DER incluido.</p>
                </div>
            </div>
        </Flex>
    )
}