import React from 'react'
import { Container, Wrapper, Autor, Categoria, FechaDePublicacion } from './EncabezadoElements'


const Encabezado = ({ autor, nota }) => {
    console.log(nota.subCategoria);

    return (
        <>
            <Container>
                <Wrapper>
                    <Autor>{autor}</Autor>
                    {nota.subCategoria ? <Categoria>{nota.categoria} {'>'} {nota.subCategoria}</Categoria> : <Categoria>{nota.categoria}</Categoria>}

                    <FechaDePublicacion>{nota.fechaDeCreacion}</FechaDePublicacion>
                </Wrapper>
            </Container>
        </>
    )
}

export default Encabezado
