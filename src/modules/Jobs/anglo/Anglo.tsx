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
import { useTranslation } from "react-i18next"

export const AngloJob:React.FC = () =>{
    const { t } = useTranslation('global')
    return (
        <Flex gap={10} style={{color:'white'}}>
            <div className="jobdescription">
                <div className="descriptionAnglo">
                    <p>{t('Jobs.Anglo.description.first')}</p>
                    <p>{t('Jobs.Anglo.description.second')}</p>
                    <p>{t('Jobs.Anglo.description.third')}</p>
                    <p><b>{t('Jobs.Neutral.techuseddes')}</b> {t('Jobs.Anglo.technologies')}</p>
                </div>
            </div>
            <div className="imagesAnglo">
                <p><b>{t('Jobs.Neutral.carousel')}</b></p>
                <Image.PreviewGroup
                    items={[ portada, login, inicio, jugadores, jugador, equipos, cobranzas ]}
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