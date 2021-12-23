import React, { useState, useEffect, useContext } from 'react'
import { PortadaContext } from '../../../Store/context/PortadaContext';
import PortadaC from '../../NewsCards/PortadaC'
import { SectionContainer, SectionWrap1, TituloSeccion } from './SeccionElements'


const Seccion1 = ({ notas, categoria, subCategoria = null }) => {

    const { startLoading } = useContext(PortadaContext);



    return (
        <>
            <SectionContainer>
                <TituloSeccion to={subCategoria ? `/${categoria.toLowerCase()}/${subCategoria.toLowerCase()}` : `/${categoria.toLowerCase()}`} exact='true' onClick={() => { startLoading() }}>{subCategoria ? `${subCategoria}` : `${categoria}`}</TituloSeccion>
                <SectionWrap1>
                    <PortadaC nota={notas[2]} container='portada4' contenido='contenido4' titulo='article4' desc='c' />
                    <PortadaC nota={notas[1]} container='portada2' contenido='contenido2' titulo='article2' desc='a' />
                    <PortadaC nota={notas[0]} container='portada2' contenido='contenido2' titulo='article2' desc='a' />

                </SectionWrap1>
            </SectionContainer>
        </>
    )
}

export default Seccion1
