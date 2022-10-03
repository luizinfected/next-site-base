import Header from "../src/components/Header";
import { Button } from "../src/components/styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contato() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    return (
        <>
            <Header title="Contato" />
            <Container>
                <h2>Contato</h2>
                <hr></hr>
                <Row>
                    <Col lg={6}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde quibusdam omnis assumenda at! Necessitatibus earum dolore qui facilis optio dolorum quos esse, voluptatem vero nam enim cum et deleniti?</p>
                        <Button>gnfdnjgkfdn</Button>
                    </Col>
                    <Col lg={6}>
                        <form className="contato" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                            <input {...register("Nome")}  placeholder="Seu nome"/>
                            <input {...register("Empresa")} placeholder="Empresa" />
                            <input {...register("Telefone")} placeholder="Telefone" type={"tel"} />
                            <select {...register("ComoNosConheceu")}>
                                <option value="">Selecione..</option>
                                <option value="A">Instagram</option>
                                <option value="B">LinkedIn</option>
                            </select>                          
                            <textarea {...register("Mensagem")} placeholder="Mensagem" />
                            <p>{data}</p>
                            <input type="submit"></input>
                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}