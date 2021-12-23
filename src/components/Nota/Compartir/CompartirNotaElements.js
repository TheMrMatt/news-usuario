import styled from 'styled-components'
import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaLink, FaSave } from 'react-icons/fa'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, } from "react-share";
export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    

    @media screen and (min-width: 320px) {
        width: 90%;
        height: 150px;
        
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 150px;
        
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        height: 150px;
    
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 150px;
        
    }

    border-top: 1px solid black;
    
`

export const RedesWrap = styled.div`
    width: 400px;     
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 320px) {
        width: 300px;    
    }
    
    @media screen and (min-width: 768px) {
        width: 400px;    
    }
    
    
    @media screen and (min-width: 993px) {
        width: 400px;    
    }
    
    @media screen and (min-width: 1200px) {
        width: 400px;    
    }

`

export const Redes = styled.div`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    
`

export const RedesFacebook = styled(FacebookShareButton)`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
    
`

export const RedesWhatsapp = styled(WhatsappShareButton)`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
    
`

export const RedesTwitter = styled(TwitterShareButton)`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }

    
`

export const FaceIcon = styled(FaFacebookSquare)`
    width: 100%;     
    height: 100%;
    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
`

export const InstaIcon = styled(FaWhatsappSquare)`
    width: 100%;     
    height: 100%; 
    
    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
`

export const TwitterIcon = styled(FaTwitterSquare)`
    width: 100%;     
    height: 100%;

    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
`

export const YoutubeIcon = styled(FaLink)`
    width: 100%;     
    height: 100%;

    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
`

export const Guardar = styled(FaSave)`
    width: 50px;     
    height: 50px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    color: #fff;
    &:hover {
        color: #E80A40;    
    }
`