import React from 'react'
import {Container, ImgOverlay, ImgPortada,FotoPerfil} from './NotaPortadaElements'


const NotaPortada = ({userPic, portadaPic}) => {

    return (
        <>
            <Container>
                   
                    <ImgOverlay>
                        <ImgPortada src={portadaPic}/>
                        <FotoPerfil src={userPic}/>
                    </ImgOverlay>
                   
            </Container>
        </>
    )
}

export default NotaPortada
