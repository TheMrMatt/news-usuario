import React, { useContext, useEffect, useState } from 'react'
import HeroSeccion from '../components/Partes/HeroSection/HeroSeccion'
import LoadingScreen from './Especials/LoadingScreen'
import Content from '../components/Partes/Content/Content'
import { useParams } from 'react-router';
import { UserContext } from '../Store/context/UserContext'
import { NotasContext } from '../Store/context/NotasContext'
import Tags from '../components/Partes/Tags/Tags'


const TagPage = () => {
    const { nota, populateNotas, notas, loading } = useContext(NotasContext)
    const camp = useParams();


    useEffect(() => {
        populateNotas();
    }, [camp.id])

    console.log(notas);
    if (loading === true) {
        return <LoadingScreen />
    }
    return (
        <>
            <HeroSeccion seccion={camp.id} />
            <Content content={notas.filter(nota => nota.tags.includes(camp.id))} />
        </>
    )
}

export default TagPage
