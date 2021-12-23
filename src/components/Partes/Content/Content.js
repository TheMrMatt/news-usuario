import React from 'react'
import PortadaC from '../../NewsCards/PortadaC'
import { Container, Wrapper, Row, Marco } from './Elements'

const Content = ({ content }) => {

    console.log(content);

    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        {content.map(nota => <Marco><PortadaC key={nota._id} nota={nota} container='portadaC' contenido='contenidoC' titulo='articleC' desc='a' /></Marco>)}
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}

export default Content
