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
import { useTranslation } from "react-i18next";

const { Title } = Typography

function App() {
  const { t } = useTranslation('global')

  return (
    <div>
      <TopPage  />
      <AboutMe />
      <Divider style={{ backgroundColor:'grey', marginTop:'80px', marginBottom:'80px' }} />
      <JobExperience>
        <Title level={1} className="title">{t('App.JobExperience')}</Title>        
        
        <ImdfJob />
        <AngloJob />
        <LiderOilJob />
        
        <div className="tecnologiasusadas">
          <Title level={1} className="title">{t('App.Technologies.title')}</Title> 
          <Flex gap={25} justify="center">
            <Card cover={<Image src={jwt} style={{ width: '200px', height: '200px'}}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Json Web Token" description={t('App.Technologies.jwt')} />
            </Card>
            <Card cover={<Image src={oauth} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="OAuth" description={t('App.Technologies.oauth')} />
            </Card>
            <Card cover={<Image src={github} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Git Hub" description={t('App.Technologies.ghub')} />
            </Card>
            <Card cover={<Image src={postman} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Postman" description={t('App.Technologies.postman')} />
            </Card>
          </Flex><br/>
          <Flex gap={25} justify="center">
            <Card cover={<Image src={vscode} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Visual Studio Code" description={t('App.Technologies.vscode')} />
            </Card>
            <Card cover={<Image src={mysqlwork} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="MySQL Workbench" description={t('App.Technologies.mysql')}  />
            </Card>
            <Card cover={<Image src={figma} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Figma" description={t('App.Technologies.figma')} />
            </Card>
            <Card cover={<Image src={drawio} style={{ width: '200px', height: '200px' }}/>} style={{ width:'200px', borderRadius:'19px' }} >
              <Meta title="Draw.io" description={t('App.Technologies.draw')} />
            </Card>            
          </Flex>
        </div>

        <Divider style={{ backgroundColor:'grey', marginTop:'80px', marginBottom:'80px' }} />
      </JobExperience>
    </div >
  );
}

export default App;
