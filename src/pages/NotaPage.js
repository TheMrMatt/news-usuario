import React, { useContext, useEffect, useState } from 'react'
import CompartirNota from '../components/Nota/Compartir/CompartirNota'
import CuerpoNota from '../components/Nota/Cuerpo/CuerpoNota'
import Encabezado from '../components/Nota/Encabezado/Encabezado'
import NotaPortada from '../components/Nota/Portada/NotaPortada'
import LoadingScreen from './Especials/LoadingScreen'
import RelacionadosNotas from '../components/Nota/Relacionados/RelacionadosNotas'
import { useParams } from 'react-router';
import { UserContext } from '../Store/context/UserContext'
import { NotasContext } from '../Store/context/NotasContext'
import Tags from '../components/Partes/Tags/Tags'


const NotaPage = () => {

    const { user, getUser, userSearch, loadingUser, isLoggedIn } = useContext(UserContext)
    const { nota, populateNota, notas, loading } = useContext(NotasContext)
    const camp = useParams();
    let data = JSON.parse(localStorage.getItem('data'));
    const token = data.accessToken;

    useEffect(() => {
        populateNota(camp.id, token)
    }, []);

    useEffect(() => {
        if (nota.autor != undefined) {
            getUser(nota.autor)
        }

    }, [loading])


    if (loadingUser === true) {
        return <LoadingScreen />
    } if (loading === true) {
        return <LoadingScreen />
    } return (
        <>
            <NotaPortada userPic={userSearch.imagenPerfil[0].url} portadaPic={nota.img[0].url} />
            <Encabezado autor={userSearch.nombreYapellido} nota={nota} />
            <CuerpoNota nota={nota} />
            {
                nota.tags[0] ? <Tags tags={nota.tags} /> : <></>
            }
            <CompartirNota nota={nota} />

        </>
    )
}

export default NotaPage
