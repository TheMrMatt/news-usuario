import React from 'react'
import Portada1 from '../../NewsCards/Portada1'

import { Container, Wrapper, Row } from './RelacionadosNotasElements'

const RelacionadosNotas = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Portada1 />
                        <Portada1 />
                        <Portada1 />
                        <Portada1 />
                    </Row>
                </Wrapper>
            </Container>
        </>
    )
}

export default RelacionadosNotas
