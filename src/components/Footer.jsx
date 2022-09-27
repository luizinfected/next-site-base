import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link'
import { BsFillPinMapFill, BsFillTelephoneFill, BsWhatsapp, BsFillEnvelopeFill, BsFacebook, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";


export default function Footer(props) {
    return (
        <footer className="p-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src="logo.png" alt={props.info.name} />
                        <adress>
                            <p className="text-white"> <BsFillPinMapFill size={20} /> Rua Lore Ipsum, 288 - Jardim Aleatório, São Paulo - Sp, CEP:29990-222</p>
                            <p className="text-white"> <BsFillTelephoneFill size={20} /> {props.info.fone}</p>
                            <p className="text-white"> <BsWhatsapp size={20} /> {props.info.whatsapp}</p>
                            <p className="text-white"> <BsFillEnvelopeFill size={20} d /> {props.info.email}</p>
                        </adress>
                    </Col>
                    <Col lg={9}>
                        <div className='footer-links'>
                            <Link href="/">Home</Link>
                            <Link href="/">Empresa</Link>
                            <Link href="contato">Produtos</Link>
                            <Link href="contato">Informações</Link>
                            <Link href="contato">Contato</Link>
                            <Link href="contato">Mapa do Site</Link>
                        </div>
                        <div className="social-links">
                            <BsFacebook size={30} />
                            <BsYoutube size={30} />
                            <BsInstagram size={30} />
                            <BsLinkedin size={30} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}