import {  Card, Divider, Flex, Image, Typography } from "antd";
import { AboutMe } from "../AboutMe/AboutMe";
import { TopPage } from "../TopPage/TopPage";
import { JobExperience } from "../../components/Divs/JobExperience";
import { ImdfJob } from "../Jobs/imdf/Imdf";
import { AngloJob } from "../Jobs/anglo/Anglo";
import { LiderOilJob } from "../Jobs/lideroil/LiderOil";

import jwt from '../../assets/img/knoweldge_tech/jwtauth.png'
import oauth from '../../assets/img/knoweldge_tech/Oauth_logo.png'
import github from '../../assets/img/knoweldge_tech/githubblack.png'
import postman from '../../assets/img/knoweldge_tech/postman.png'
import vscode from '../../assets/img/knoweldge_tech/vscode.png'
import mysqlwork from '../../assets/img/knoweldge_tech/mysqlworkbench.png'
import figma from '../../assets/img/knoweldge_tech/figma.png'
import drawio from '../../assets/img/knoweldge_tech/drawio.png'
import Meta from "antd/es/card/Meta";

const { Title } = Typography

function App() {

  return (
    <div>
      <TopPage  />
      <AboutMe />
      <Divider style={{ backgroundColor:'grey', marginTop:'80px', marginBottom:'80px' }} />
      <JobExperience>
        <Title level={1} className="title">Experiencia Profesional</Title>        
        
        <ImdfJob />
        <AngloJob />
        <LiderOilJob />
        
        <div className="tecnologiasusadas">
          <Title level={1} className="title">En todos los proyectos que he participado se utilizaron las siguientes tecnologías:</Title> 
          <Flex gap={25} justify="center">
            <Card cover={<Image src={jwt} style={{ width: '200px', height: '200px'}}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Json Web Token" description="Para manejar la sesión del usuario mediante tokens" />
            </Card>
            <Card cover={<Image src={oauth} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="OAuth" description="Para delegar autorizaciones de los usuarios y manejo de tokens del usuarios" />
            </Card>
            <Card cover={<Image src={github} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Git Hub" description="Para el manejo y control de versiones de cada aplicación" />
            </Card>
            <Card cover={<Image src={postman} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Postman" description="Para realizar pedidos http de pruebas a los endpoints" />
            </Card>
          </Flex><br/>
          <Flex gap={25} justify="center">
            <Card cover={<Image src={vscode} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Visual Studio Code" description="IDE donde se realizaron estos sistemas" />
            </Card>
            <Card cover={<Image src={mysqlwork} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="MySQL Workbench" description="Motor de base de datos para realizar consultas a las tablas de la misma o crear nuevos campos o tablas" />
            </Card>
            <Card cover={<Image src={figma} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Figma" description="Donde se realizan los prototipos de los sistemas para luego presentarlos" />
            </Card>
            <Card cover={<Image src={drawio} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Draw.io" description="Para realizar esquemas DER para las base de datos" />
            </Card>            
          </Flex>
        </div>

        <Divider style={{ backgroundColor:'grey', marginTop:'80px', marginBottom:'80px' }} />
      </JobExperience>
    </div >
  );
}

export default App;
