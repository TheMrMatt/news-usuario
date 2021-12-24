import React, { useContext, useEffect } from 'react'
import { PortadaContext } from '../Store/context/PortadaContext'
import HeroSeccion from '../components/Partes/HeroSection/HeroSeccion'
import SeccionPortada from '../components/Partes/SubSecciones/SeccionPortada'
import Seccion1 from '../components/Partes/Seccion/Seccion1'
import Seccion2 from '../components/Partes/Seccion/Seccion2'
import { NotasContext } from '../Store/context/NotasContext'
import Content from '../components/Partes/Content/Content'
import LoadingScreen from './Especials/LoadingScreen'
import SubNav from '../components/SubNav/SubNav'

const SectionPage = ({ cat, subCats, content }) => {

    useEffect(() => {
        populateNotas();
        getPortadas();
        getPortada(cat);
    }, [cat])


    const { notas, populateNotas, loading, startLoading } = useContext(NotasContext)
    const { portadas, getPortada, portada, loadingP, getPortadas } = useContext(PortadaContext)

    const categoria = portada.subCategorias;


    const nota = notas.filter(notas => notas.categoria === cat)
    const port = portadas.filter(po => po.portada === cat.toUpperCase())
    let portada2 = notas.filter(not => not.categoria.toUpperCase() === cat.toUpperCase())
    portada2 = portada2.slice(-3);


    if (loading === true) {
        return <LoadingScreen />
    } else if (loadingP == true) {
        return <LoadingScreen />
    }
    return (
        <>
            {
                portada && (
                    <>
                        <SubNav cat={cat} subcats={portada.subCategorias} />
                        <HeroSeccion seccion={cat} />
                        <SeccionPortada portadaPrincipal={portada.principal} portada={portada.secundario} notas={portada2} />
                        <Content content={nota} />
                    </>
                )
            }

        </>
    )
}

/*
     
*/

export default SectionPage
