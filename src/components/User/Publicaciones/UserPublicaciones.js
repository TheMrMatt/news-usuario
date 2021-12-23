import React from 'react'
import PortadaC from '../../NewsCards/PortadaC'
import Content from '../../Partes/Content/Content'

import { Container, Wrapper, Titulo, NotasWrapper } from './UserPublicacionesElements'

const UserPublicaciones = ({ notas, user }) => {

    console.log('', notas)

    return (
        <>
            <Container>
                <Wrapper>
                    {user.tipoUsuario.toLowerCase() === 'normal' ? <Titulo>Articulos Guardados</Titulo> : <Titulo>Articulos Publicados</Titulo>}
                    <Content content={notas} />
                </Wrapper>
            </Container>
        </>
    )
}
//{notas.map(nota => <PortadaC key={nota._id} nota={nota} container='portadaC' contenido='contenidoC' titulo='articleC' desc='a' />)}
export default UserPublicaciones
