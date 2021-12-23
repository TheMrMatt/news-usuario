import React from 'react'
import PortadaC from '../../NewsCards/PortadaC'
import { PortadaContainer, PortadaWrap, Col1, Col2 } from './Elements'


const SeccionPortada = ({ portadaPrincipal, portada, notas }) => {
    console.log('portada', notas);
    return (
        <>
            <PortadaContainer>
                <PortadaWrap>
                    <Col1><PortadaC nota={notas[2]} container='portada5' contenido='contenido5' titulo='article5' /></Col1>
                    <Col2>
                        <PortadaC nota={notas[1]} container='portada6' contenido='contenido6' titulo='article6' />
                        <PortadaC nota={notas[0]} container='portada6' contenido='contenido6' titulo='article6' />
                    </Col2>
                </PortadaWrap>
            </PortadaContainer>
        </>
    )
}

export default SeccionPortada