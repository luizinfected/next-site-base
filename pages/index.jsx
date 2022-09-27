import styles from '../styles/Home.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from '../src/components/Header';
import { Button, Card, Container } from 'react-bootstrap';


export default function Home(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsiveCarousel = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Header title="Home" info={props} />
            <Carousel responsive={responsive} className={styles.banner}>
                <div><img src='banner.jpg' alt='banner' title='banner' /></div>
                <div><img src='banner2.jpg' alt='banner' title='banner' /></div>
            </Carousel>;

            <Container>


                <h2>Doutores da Web Marketing Digital</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam alias id suscipit officiis, laboriosam voluptas optio voluptatem quasi quis cupiditate soluta fugiat quos, tempore, officia repudiandae nihil, eaque atque autem.</p>
                <Button>Saiba mais</Button>

                <hr />
                <h2 className='pt-2'>Produtos em destaque</h2>
                <div className="grid grid-col-4 py-5">
                    <Card>
                        <Card.Img variant="top" src="banner.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="banner.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="banner.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="banner.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>


                <Carousel responsive={responsiveCarousel} className="py-5">
                    <div><img src='clientes/01.jpg' alt='banner' title='banner' /></div>
                    <div><img src='clientes/02.jpg' alt='banner' title='banner' /></div>
                    <div><img src='clientes/03.jpg' alt='banner' title='banner' /></div>
                    <div><img src='clientes/04.jpg' alt='banner' title='banner' /></div>
                    <div><img src='clientes/03.jpg' alt='banner' title='banner' /></div>
                    <div><img src='clientes/04.jpg' alt='banner' title='banner' /></div>
                </Carousel>


            </Container>

        </div>
    )
}

