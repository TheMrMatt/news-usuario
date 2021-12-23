import React from 'react'
import {FooterContainer, FooterWrapper, FooterWrapper2,Logo,ContentWrapper, ContenteWrap,ContentTitle,Item,Copyright,Follow,RedesWrap,Redes, FaceIcon, InstaIcon, TwitterIcon, YoutubeIcon} from './FooterElements'


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <Logo>Contexto</Logo>
                    <ContentWrapper>
                        <ContenteWrap>
                            <ContentTitle>Categorias</ContentTitle>
                            <Item>Deportes</Item>
                            <Item>Tecnologia</Item>
                            <Item>Espectaculo</Item>
                            <Item>Policiales</Item>
                        </ContenteWrap>
                        <ContenteWrap>
                            <ContentTitle>Empresa</ContentTitle>
                            <Item>Nuestro Equipo</Item>
                            <Item>Contactanos</Item>
                            <Item>Nuestra Historia</Item>
                        </ContenteWrap>
                    </ContentWrapper>
                    
                </FooterWrapper>
                <FooterWrapper2>
                    <Copyright>© Photo, Inc. 2021. We love our users!</Copyright>
                    
                    <RedesWrap>
                        <Follow>Seguinos:</Follow>
                        <Redes><FaceIcon/></Redes>
                        <Redes><InstaIcon/></Redes>
                        <Redes><TwitterIcon/></Redes>
                        <Redes><YoutubeIcon/></Redes>
                    </RedesWrap>
                </FooterWrapper2>
            </FooterContainer>
        </>
    )
}

export default Footer
