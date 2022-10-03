import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import '../../styles/Header.module.css'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content=" H1 + 140 PALAVRAS DO CLIENTE" />
                <meta charSet='utf-8' />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
                </style>
            </Head>

            <header>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Doutores da Web</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto links">
                                <Link href="/">Home</Link>
                                <Link href="/empresa">Empresa</Link>
                                <Link href="contato">Produtos</Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Informações
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Link href="/">Home</Link>
                                        <Link href="contato">Contato</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Link href="contato">Contato</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}
