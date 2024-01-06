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
import { useTranslation } from "react-i18next"

const { Title } = Typography


export const ImdfJob:React.FC = () =>{
    const { t } = useTranslation('global')

    return(
        <Flex gap={10} style={{color:'white'}}>
            <div className="images">
                <p><b>{t('Jobs.Neutral.carousel')}</b></p>
                <Image.PreviewGroup
                    items={[ portada, imdfLogin, inicio, areas, cursos, usuarios, notas ]}
                >
                <Image
                    width={700}
                    src={portada}
                />
                </Image.PreviewGroup>
                <div className="technologies">
                    <h3>{t('Jobs.Neutral.techused')}</h3><br/>
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
                        <GroupOutlined /> - {t('Jobs.Neutral.company')}:
                        <h3>TreeMind</h3>
                    </div>
                    <div>
                        <ImportOutlined /> - {t('Jobs.Neutral.location')}:
                        <h3>Córdoba - Argentina</h3>
                    </div>
                    <div>
                        <FieldTimeOutlined /> - {t('Jobs.Neutral.time')}:
                        <h3>{t('Jobs.Neutral.date.june')} 2019 - {t('Jobs.Neutral.date.august')} 2022</h3>
                    </div>
                </Flex>

                <Title level={2} style={{ color:'white', marginTop:'50px', textAlign:'center' }}>Full Stack Developer</Title>
                <Title level={3} style={{ color:'white', marginTop:'50px' }}><u>{t('Jobs.Neutral.description')}</u></Title>
                <div className="description">
                    <p>{t('Jobs.Imdf.description.first')}</p>
                    <p>{t('Jobs.Imdf.description.second')}</p>
                    <p><b>{t('Jobs.Neutral.techuseddes')}</b> {t('Jobs.Imdf.technologies')}</p>
                </div>
            </div>
        </Flex>
    )
}