import { Col, Flex, Image, Row, Typography } from "antd"
import { PersonalInformation } from "../../components/Divs/PersonalInformation"
import { Card } from "react-bootstrap"

import images from '../../assets/img/personal_photo/BackgroundImage.png'
import javascript from '../../assets/img/knoweldge_tech/JavaScript-logo.png'
import typescript from '../../assets/img/knoweldge_tech/Typescript_logo.png'
import php from '../../assets/img/knoweldge_tech/PHP-logo.png'
import sql from '../../assets/img/knoweldge_tech/SQL-logo.png'
import nosql from '../../assets/img/knoweldge_tech/Mongodb.png'
import react from '../../assets/img/knoweldge_tech/React-icon.png'
import angular from '../../assets/img/knoweldge_tech/Angular.png'
import laravel from '../../assets/img/knoweldge_tech/laravel.png'
import symfony from '../../assets/img/knoweldge_tech/symfony.png'
import nodejs from '../../assets/img/knoweldge_tech/nodejs.png'
import express from '../../assets/img/knoweldge_tech/express-js.png'
import antd from '../../assets/img/knoweldge_tech/antd.png'
import bootstrap from '../../assets/img/knoweldge_tech/bootstrap-logo.png'
import materialui from '../../assets/img/knoweldge_tech/materialui.png'
import reactquery from '../../assets/img/knoweldge_tech/reactquery.png'
import styledComponents from '../../assets/img/knoweldge_tech/styled-components.png'
import jwt from '../../assets/img/knoweldge_tech/jwtauth.png'
import oauth from '../../assets/img/knoweldge_tech/Oauth_logo.png'
import axios from '../../assets/img/knoweldge_tech/axios.png'
import github from '../../assets/img/knoweldge_tech/gitub.png'
import git from '../../assets/img/knoweldge_tech/git.png'
import linux from '../../assets/img/knoweldge_tech/linux.png'
import mysqlwork from '../../assets/img/knoweldge_tech/mysqlworkbench.png'
import sqlserver from '../../assets/img/knoweldge_tech/sqlserver.png'
import figma from '../../assets/img/knoweldge_tech/figma.png'
import drawio from '../../assets/img/knoweldge_tech/drawio.png'
import vscode from '../../assets/img/knoweldge_tech/vscode.png'
import postman from '../../assets/img/knoweldge_tech/postman.png'

const { Title } = Typography

export const AboutMe:React.FC = () =>{
    return (
        <PersonalInformation>
            <Row>
                <Col span={12}>
                    <Flex gap={30} className="aboutMe">
                        <Image src={images} style={{ width: '320px', height: '500px', borderRadius: '5%' }}/>
                        <Card.Text style={{ marginTop:'20px', marginRight: '20px' }}>
                            <Card.Title>Sobre Mí</Card.Title>
                            <br/>
                            <p>Soy un apasionado por lo que hago, buscando continuamente el crecimiento intelectual en el ámbito de la programacion.
                            Desde que me recibí siempre priorice el estar al pendiente de las tecnologias que iban surgiendo, así como estar informado de 
                            actualizaciones en cada lenguaje que manejo.</p>
                            <p>Personalmente me considero una persona meticulosa, y comprometida con cada proyecto que se ponga por delante, 
                            siempre intento buscar una optimizacion en el codigo, y revisar constantemente que porcion del mismo es redundante o reutilizable 
                            para asi transformarlo en un componente unico.
                            Si bien poseo habilidades en creacion de APIs RESTful, Interfaces de usuario, y Administracion de Base de Datos, tiendo a inclinarme mas por el Desarrollo Front End,
                            aunque considero que puedo desenvolverme muy bien en estos tres ámbitos.</p>
                            <p>No todo es color de rosas, poseo defectos como cualquier otro, aunque no me considero muy bueno identificandolos, considero que mi mayor defecto es que cuando algo no me 
                            sale bien al 3er intento me enojo demasiado, no me impide realizar la tarea, de hecho me motiva mas a solucionar el error que tuviere, pero me deja con un sabor amargo lo 
                            que queda del dia.</p>
                        </Card.Text>
                    </Flex>
                </Col>
                <Col span={12} style={{ textAlign:'center' }}>
                    <Title level={2} style={{ color:'white'}}>Lenguajes de Programación</Title>
                    <Flex gap={20} justify="center">
                        <Image src={javascript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={typescript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={php} style={{ width: '130px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={sql} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={nosql} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                    </Flex><br/>
                    <Row>
                        <Col span={12}>
                            <Title level={3} style={{ color:'white'}}>Front End</Title>
                            <Image src={react} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={angular} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        </Col>
                        <Col span={12}>
                            <Title level={3} style={{ color:'white'}}>Back End</Title>
                            <Image src={laravel} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={symfony} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={nodejs} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={express} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col span={12}>
                            <Title level={3} style={{ color:'white'}}>Librerias Front End</Title>
                            <Image src={antd} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={bootstrap} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={materialui} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={reactquery} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={styledComponents} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        </Col>
                        <Col span={12}>
                            <Title level={3} style={{ color:'white'}}>Librerias Back End</Title>
                            <Image src={jwt} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={oauth} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={axios} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col span={24} >
                            <Title level={3} style={{ color:'white'}}>Otros conocimientos</Title>
                            <Flex gap={15} justify="center">
                            <Image src={github} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={git} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={postman} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={linux} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={vscode} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={mysqlwork} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={sqlserver} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={figma} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            <Image src={drawio} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </PersonalInformation>
    )
}