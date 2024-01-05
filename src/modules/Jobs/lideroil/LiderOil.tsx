import { FieldTimeOutlined, GroupOutlined, ImportOutlined } from "@ant-design/icons"
import { Flex, Image, Typography } from "antd"
import javascript from '../../../assets/img/knoweldge_tech/JavaScript-logo.png'
import typescript from '../../../assets/img/knoweldge_tech/Typescript_logo.png'
import react from '../../../assets/img/knoweldge_tech/React-icon.png'
import antd from '../../../assets/img/knoweldge_tech/antd.png'
import reactquery from '../../../assets/img/knoweldge_tech/reactquery.png'
import axios from '../../../assets/img/knoweldge_tech/axios.png'

const { Title } = Typography

export const LiderOilJob:React.FC = () => {
    return (
        <Flex gap={10} style={{color:'white'}}>
            <div className="images">
                <div className="technologiesLider">
                    <h3>Tecnologias utilizadas</h3><br/>
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
                        <GroupOutlined /> - Empresa:
                        <h3>Lider Oil</h3>
                    </div>
                    <div>
                        <ImportOutlined /> - Ubicacion:
                        <h3>Córdoba - Argentina</h3>
                    </div>
                    <div>
                        <FieldTimeOutlined /> - Años trabajados:
                        <h3>Agosto 2022 - Julio 2023</h3>
                    </div>
                </Flex>

                <Title level={2} style={{ color:'white', marginTop:'50px', textAlign:'center' }}>Front End Developer</Title>
                <Title level={3} style={{ color:'white', marginTop:'50px' }}><u>Descripcion</u>:</Title>
                <div className="description">
                    <p>En 2022 me llego una oferta de unirme como desarrollador Front End a un proyecto que se estaba realizando para una empresa petrolera, este mismo sistema no era nada diferene
                    a lo que ya he hecho años anteriores.</p>
                    <p>La diferencia es que se manejaban tres tipos de usuarios, Administrador, Cliente y Vendedor, cada rol poseia su propia vista dentro del sistema y claro tambien sus propias funcionalidades,
                    el Administrador podia cargar usuarios, o bien cualquier usuario se podia registrar, y la aplicacion le advertiria al Administrador que hubo un nuevo registro, 
                    para asi el mismo poder permitirle entrar designandole un estado "Autorizado" o "No autorizado", y tambien asignandole un rol, dependiendo la persona, si era cliente o vendedor.
                    Este mismo sistema manejaba las facturas y precios con tasas de intereses e impuestos que se debia de enviar tanto al cliente como al vendedor.</p>
                    
                    <p><b>Las tecnologias que se utilizaron para desarrollar este sistema fueron:</b> ReactQuery y Axios para conectar con el Back End y asi poder realizar consultas al endpoint, ReactTS y ReactJS para el Front End utilizando la libreria AntDesign</p>
                </div>
            </div>
        </Flex>
    )
}