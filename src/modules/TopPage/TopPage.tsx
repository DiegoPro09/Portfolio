import { Col, Flex, Image, Row } from "antd"
import { IdCard } from "../../components/Card/PresentationCard"
import { MainDiv } from "../app/styled/MainDiv"
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import photoProfile from '../../assets/img/personal_photo/Photo.png'
import { useTranslation } from "react-i18next"

export const TopPage:React.FC = () =>{
    const { t } = useTranslation('global')
    return(
        <div>
            <MainDiv>
                <IdCard style={{ boxShadow: '16px 14px 20px #000000' }}>
                    <div className="content">
                        <Row>
                            <Col span={8}>
                                <div className="personalData">
                                    <Image src={photoProfile} style={{ width: '280px', height: '320px', borderRadius: '10%' }} preview={false}/>
                                </div>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={15}>
                                <Flex gap={60} className="fullName">
                                    <div>
                                        {t('Top.name')}
                                        <h3>Diego Emilio</h3>
                                    </div>

                                    <div>
                                        {t('Top.lastname')} 
                                        <h3>Vallejos Rigoni</h3>
                                    </div>
                                </Flex>

                                <div className="title">
                                    {t('Top.title')}
                                    <h3>Full Stack Developer (mid level) </h3>
                                </div>

                                <div className="title">
                                    {t('Top.contact')}
                                    <h5> <MailOutlined />  diego.proware@gmail.com </h5>
                                    <h5> <PhoneOutlined /> +385 91 575 5061 </h5>
                                </div>
                                <div className="title">
                                    {t('Top.social')}
                                    <h5> <GithubOutlined /> <a href="https://github.com/DiegoPro09" target="_blank" rel="noreferrer"> DiegoPro09 </a></h5>
                                    <h5> <LinkedinOutlined /> <a href="https://www.linkedin.com/in/diegoevallejos" target="_blank" rel="noreferrer">Diego Emilio Vallejos</a> </h5>
                                    <h5> <InstagramOutlined /> <a href="https://www.instagram.com/diego_vallejos_09?igsh=cTZyZ2l5cmF1bjls" target="_blank" rel="noreferrer">Diego_Vallejos_09 </a></h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </IdCard>
            </MainDiv>
        </div>
    )
}