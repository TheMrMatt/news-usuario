import React, { useContext, useEffect } from 'react'
import Hero from '../components/Partes/HeroSection/HeroSeccion'
import Portada from '../components/Portada'
import Seccion1 from '../components/Partes/Seccion/Seccion1'
import Seccion2 from '../components/Partes/Seccion/Seccion2'
import { PortadaContext } from '../Store/context/PortadaContext'
import { NotasContext } from '../Store/context/NotasContext'
import LoadingScreen from './Especials/LoadingScreen'

const Home = () => {
    useEffect(() => {
        populateNotas()
        getPortadas()
        MasRecientesNotas()
    }, [])


    const { masRecientes, notas, populateNotas, loading, MasRecientesNotas } = useContext(NotasContext)
    const { portadas, getPortadas, loadingP, startLoading } = useContext(PortadaContext)
    const home = portadas.find(portada => portada.portada === 'HOME')
    let dep2 = notas.filter(not => not.categoria.toUpperCase() === 'DEPORTES')
    dep2 = dep2.slice(-3);
    let esp2 = notas.filter(not => not.categoria.toUpperCase() === 'ESPECTACULOS')
    esp2 = esp2.slice(-3);
    let pol2 = notas.filter(not => not.categoria.toUpperCase() === 'POLICIALES')
    pol2 = pol2.slice(-3);
    let tec2 = notas.filter(not => not.categoria.toUpperCase() === 'TECNOLOGIA')
    tec2 = tec2.slice(-3);
    console.log('notas', notas);

    if (loadingP === true) {
        console.log('en el log', portadas)
        return <LoadingScreen />
    } return (
        <>
            {console.log(loadingP, loading)

            }

            <Portada key={home.portada} portadaPrincipal={home.principal} portada={home.secundario} masRecientes={masRecientes} />
            <Seccion1 categoria={dep2[0].categoria} notas={dep2} />
            <Seccion2 categoria={esp2[0].categoria} notas={esp2} />
            <Seccion1 categoria={pol2[0].categoria} notas={pol2} />
            <Seccion2 categoria={tec2[0].categoria} notas={tec2} />
        </>
    )
}

export default Home
