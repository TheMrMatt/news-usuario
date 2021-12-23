import React, { useContext, useEffect } from 'react'
import { PortadaContext } from '../Store/context/PortadaContext'
import { NotasContext } from '../Store/context/NotasContext'
import HeroSeccion from '../components/Partes/HeroSection/HeroSeccion'
import SeccionPortada from '../components/Partes/SubSecciones/SeccionPortada'
import Content from '../components/Partes/Content/Content'
import LoadingScreen from './Especials/LoadingScreen'

const SubSeccionPage = ({ subCat }) => {

    useEffect(() => {
        populateNotas();

    }, [subCat])

    const { notas, loading, populateNotas } = useContext(NotasContext)
    const { portadas } = useContext(PortadaContext)

    const enviar = portadas.find(portada => portada.portada === subCat.toUpperCase())
    let portada2 = notas.filter(not => not.subCategoria.toUpperCase() === subCat.toUpperCase())
    portada2 = portada2.slice(-3);
    const nota = notas.filter(notas => notas.subCategoria === subCat)
    console.log('Portada', portada2);
    if (loading === true) {
        return <LoadingScreen />
    }
    return (
        <>
            <HeroSeccion seccion={subCat} />
            <SeccionPortada notas={portada2} />
            <Content content={nota} />
        </>
    )
}

export default SubSeccionPage
