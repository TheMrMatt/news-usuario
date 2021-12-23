import React from 'react'
import PortadaC from '../../NewsCards/PortadaC'
import { SectionContainer, SectionWrap2, TituloSeccion } from './SeccionElements'


const Seccion2 = ({ categoria, subCategoria = null, notas }) => {
    return (
        <>
            <SectionContainer>
                <TituloSeccion to={subCategoria ? `/${categoria.toLowerCase()}/${subCategoria.toLowerCase()}` : `/${categoria.toLowerCase()}`} exact='true'>{subCategoria ? `${subCategoria}` : `${categoria}`}</TituloSeccion>
                <SectionWrap2>
                    <PortadaC nota={notas[0]} container='portada2' contenido='contenido2' titulo='article2' desc='a' />
                    <PortadaC nota={notas[1]} container='portada2' contenido='contenido2' titulo='article2' desc='a' />
                    <PortadaC nota={notas[2]} container='portada4' contenido='contenido4' titulo='article4' desc='c' />
                </SectionWrap2>
            </SectionContainer>
        </>
    )
}

export default Seccion2
