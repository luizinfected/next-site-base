import { Col, Container, Row } from "react-bootstrap";
import Header from "../src/components/Header";

export default function Empresa() {
    return (
        <>
            <Header title="Empresa" />
            <Container className="py-5">
                <Row>
                    <Col lg={6} className="empresa">
                        <img src="banner.jpg" alt="Empresa" />
                    </Col>
                    <Col lg={6}>
                        <h2>Empresa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus exercitationem vel numquam rem quo aliquid eligendi molestiae magni quam pariatur perferendis nulla fugit eum, laudantium sequi deserunt incidunt. Ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus exercitationem vel numquam rem quo aliquid eligendi molestiae magni quam pariatur perferendis nulla fugit eum, laudantium sequi deserunt incidunt. Ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus exercitationem vel numquam rem quo aliquid eligendi molestiae magni quam pariatur perferendis nulla fugit eum, laudantium sequi deserunt incidunt. Ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus exercitationem vel numquam rem quo aliquid eligendi molestiae magni quam pariatur perferendis nulla fugit eum, laudantium sequi deserunt incidunt. Ad.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus exercitationem vel numquam rem quo aliquid eligendi molestiae magni quam pariatur perferendis nulla fugit eum, laudantium sequi deserunt incidunt. Ad.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )

}