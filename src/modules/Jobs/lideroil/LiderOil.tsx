import { FieldTimeOutlined, GroupOutlined, ImportOutlined } from "@ant-design/icons"
import { Flex, Image, Typography } from "antd"
import javascript from '../../../assets/img/knoweldge_tech/JavaScript-logo.png'
import typescript from '../../../assets/img/knoweldge_tech/Typescript_logo.png'
import react from '../../../assets/img/knoweldge_tech/React-icon.png'
import antd from '../../../assets/img/knoweldge_tech/antd.png'
import reactquery from '../../../assets/img/knoweldge_tech/reactquery.png'
import axios from '../../../assets/img/knoweldge_tech/axios.png'
import { useTranslation } from "react-i18next"

const { Title } = Typography

export const LiderOilJob:React.FC = () => {
    const { t } = useTranslation('global')

    return (
        <Flex gap={10} style={{color:'white'}}>
            <div className="images">
                <div className="technologiesLider">
                    <h3>{t('Jobs.Neutral.techused')}</h3><br/>
                    <Flex gap={10} justify="center">
                        <Image src={javascript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={typescript} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={react} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={antd} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={reactquery} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                        <Image src={axios} style={{ width: '80px', height: '80px', borderRadius: '0%' }}/>
                    </Flex>
                </div>
            </div>
            <div className="jobdescriptionLider">
                <Flex gap={60} >
                    <div>
                        <GroupOutlined /> - {t('Jobs.Neutral.company')}:
                        <h3>Lider Oil</h3>
                    </div>
                    <div>
                        <ImportOutlined /> - {t('Jobs.Neutral.location')}:
                        <h3>Córdoba - Argentina</h3>
                    </div>
                    <div>
                        <FieldTimeOutlined /> - {t('Jobs.Neutral.time')}:
                        <h3>{t('Jobs.Neutral.date.august')} 2022 - {t('Jobs.Neutral.date.july')} 2023</h3>
                    </div>
                </Flex>

                <Title level={2} style={{ color:'white', marginTop:'50px', textAlign:'center' }}>Front End Developer</Title>
                <Title level={3} style={{ color:'white', marginTop:'50px' }}><u>{t('Jobs.Neutral.description')}</u></Title>
                <div className="description">
                    <p>{t('Jobs.Lider.description.first')}</p>
                    <p>{t('Jobs.Lider.description.second')}</p>
                    
                    <p><b>{t('Jobs.Neutral.techuseddes')}</b> {t('Jobs.Lider.technologies')}</p>
                </div>
            </div>
        </Flex>
    )
}