import React from 'react'
import Portada1 from '../NewsCards/Portada1'
import PortadaC from '../NewsCards/PortadaC'
import { PortadaContainer, Col1, Col2, Recientes, ContainerArticulos, RecientesTitulo } from './PortadaElements'


const Portada = ({ portadaPrincipal, portada, masRecientes }) => {


    return (
        <>
            <PortadaContainer>
                <Col1>
                    <Portada1 key={portadaPrincipal.id} nota={portadaPrincipal} container='portada1' contenido='contenido1' titulo='article1'></Portada1>
                    <ContainerArticulos>
                        {portada.map(nota => (<Portada1 key={nota.id} nota={nota} container='portada2' contenido='contenido2' titulo='article2' desc='a' />))}

                    </ContainerArticulos>
                </Col1>
                <Col2>
                    <Recientes>
                        <RecientesTitulo>Mas recientes</RecientesTitulo>
                        {masRecientes.map(nota => (<PortadaC key={nota._id} nota={nota} container='portada3' contenido='contenido3' titulo='article3' desc='b' />))}
                    </Recientes>
                </Col2>
            </PortadaContainer>
        </>
    )
}

export default Portada
