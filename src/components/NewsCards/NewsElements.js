import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';



export const ImgOverlay = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;    

        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
            
        transition-duration: 1s;

            :before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
                z-index: 2;
                -webkit-transform: scaleY(0);
                transform: scaleY(0);
                -webkit-transform-origin: 50% 100%; 
                transform-origin: 0% 0%;
                -webkit-transition-property: transform;
                transition-property: transform;
                -webkit-transition-duration: 0.6s;
                transition-duration: 0.6s;
                -webkit-transition-timing-function: ease-in-out;
                transition-timing-function: cubic-bezier(.86,.01,.15,.99);
            }

    `

export const Cover = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58));
            z-index: 2;
        }
    `

export const ArticuloTitle = styled.h2`
        font-style: normal;
        font-weight: normal;
        line-height: 36px;
        pointer-events: none;
        transition: 0.5s;
        text-align: center;
        letter-spacing: 0.035em;
        color: #FFFFFF;


       

        &.article1{
            transform: translateY(0px);
            @media screen and (min-width: 320px) {
                font-size: 14px;
                width: 100%;
            }
            @media screen and (min-width: 768px) {
                width: 70%;
            }
            @media screen and (min-width: 993px) {
                font-size: 16px;
                width: 65%;
            }
            @media screen and (min-width: 1200px) {
                width: 80%;
            }
        }

        &.article2{
            transform: translateY(60px);
            @media screen and (min-width: 768px) {
                font-size: 24px;
            }
        
        
            @media screen and (min-width: 993px) {
                font-size: 12px;
            }
        
            @media screen and (min-width: 1200px) {
                font-size: 14px;
            }
        }
        &.articleC{
            transform: translateY(60px);
            @media screen and (min-width: 768px) {
                font-size: 24px;
            }


            @media screen and (min-width: 993px) {
                font-size: 12px;
            }

            @media screen and (min-width: 1200px) {
                font-size: 14px;
            }
        }
        &.article3{
            font-size: 14px;
            transform: translateY(30px);
        }

        &.article4{
            transform: translateY(30px);
            @media screen and (min-width: 320px) {
                font-size: 14px;
            }

            @media screen and (min-width: 768px) {
                font-size: 20px;
            }


            @media screen and (min-width: 993px) {
                font-size: 24px;
            }

            @media screen and (min-width: 1200px) {
                font-size: 26px;
            }
        }

        &.article5{
            transform: translateY(30px);
            @media screen and (min-width: 320px) {
                font-size: 18px;
            }

            @media screen and (min-width: 768px) {
                font-size: 30px;
            }


            @media screen and (min-width: 993px) {
                font-size: 30px;
            }

            @media screen and (min-width: 1200px) {
                font-size: 36px;
            }
        }
        &.article6{
            transform: translateY(50px);
            display: flex;
            align-items: center;
        }
    `

export const Desc = styled.div`
        
        width: 70%
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.45em;
        text-transform: uppercase;
        font-feature-settings: 'tnum' on, 'lnum' on;
        transform: translateY(0px);    
        color: #FFFFFF;
        opacity: 0;
        visibility: hidden;
        margin-bottom: 50px;
        pointer-events: none;

        &.a{
            width: 80%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

        &.b{
            width: 100%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

        &.c{
            width: 80%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

    `

export const TagCategoria = styled.div`
    width: 100px;
    height: 25px;
    display: flex;
    padding: 10px;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 100;
    border: 1px solid #E80A40;
    transform: scaleX(1);
    transform-origin: 0% 0%;    
    transition-timing-function: linear(.86,.01,.15,.99);
            
    transition-duration: 0.5s;
`

export const Tag = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 36px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;

    color: #FFFFFF;
`

export const PortadaContainer = styled(LinkR)`
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;
        
        

        &.portada1{
            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
    
    
            @media screen and (min-width: 993px) {
                width: 648px;
                height: 295px;
            }
    
            @media screen and (min-width: 1200px) {
                width: 750px;
                height: 300px;
            }
    
    
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
    
    
                ${ArticuloTitle} {
                    
                    transform: translateY(-50px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-20px);
                    transition-delay: 0.5s;
                    
                    
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }
        &.portada2{
            width: 688px;
            height: 350px;

            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
    
    
            @media screen and (min-width: 993px) {
                width: 202px;
                height: 253px;
            }
    
            @media screen and (min-width: 1200px) {
                width: 230px;
                height: 275px;
            }
    
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
    
    
                ${ArticuloTitle} {
                    
                    transform: translateY(20px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-20px);
                    transition-delay: 0.5s;
                    
                    &.a{
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(40px);
                        transition-delay: 0.5s;
                    }
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }

        &.portada3{
            width: 370px;
            height: 160px;

            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
    
    
            @media screen and (min-width: 993px) {
                width: 295px;
                height: 150px;
            }
    
            @media screen and (min-width: 1200px) {
                width: 370px;
                height: 160px;
            }
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
    
    
                ${ArticuloTitle} {
                    
                    transform: translateY(10px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-20px);
                    transition-delay: 0.5s;
                    
                    &.b{
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(20px);
                        transition-delay: 0.5s;
                    }
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }

        &.portada4{
            width: 679px;
            height: 275px;

            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
    
    
            @media screen and (min-width: 993px) {
                width: 555px;
                height: 254px;
            }
    
            @media screen and (min-width: 1200px) {
                width: 679px;
                height: 275px;
            }
    
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
    
    
                ${ArticuloTitle} {
                    
                    transform: translateY(-20px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-20px);
                    transition-delay: 0.5s;
    
                    &.c{
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(20px);
                        transition-delay: 0.5s;
                    }
                    
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }

        &.portada5{
            width: 750px;
            height: 600px;

            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
        
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
        
        
            @media screen and (min-width: 993px) {
                width: 600px;
                height: 500px;
            }
        
            @media screen and (min-width: 1200px) {
                width: 750px;
                height: 600px;
            }
        
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
        
        
                ${ArticuloTitle} {
                    
                    transform: translateY(-50px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(30px);
                    transition-delay: 0.5s;
                    
                    
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }

        &.portadaC{
            width: 688px;
            height: 350px;

            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
    
    
            @media screen and (min-width: 993px) {
                width: 202px;
                height: 253px;
            }
    
            @media screen and (min-width: 1200px) {
                width: 230px;
                height: 275px;
            }
    
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
    
    
                ${ArticuloTitle} {
                    
                    transform: translateY(20px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(-20px);
                    transition-delay: 0.5s;
                    
                    &.a{
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(40px);
                        transition-delay: 0.5s;
                    }
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }

        &.portada6{
            @media screen and (min-width: 320px) {
                width: 100%;
                height: 350px;
            }
        
            @media screen and (min-width: 768px) {
                width: 688px;
                height: 350px;
            }
        
        
            @media screen and (min-width: 993px) {
                width: 350px;
                height: 240px;
            }
        
            @media screen and (min-width: 1200px) {
                width: 400px;
                height: 290px;  
            }
        
            &:hover {
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                
                ${ImgOverlay}:hover:before{
                    -webkit-transform: scaleY(1);
                    transform: scaleY(1);
                }    
        
        
                ${ArticuloTitle} {
                    
                    transform: translateY(-20px);
                    transition-delay: 0.20s;
                    
                }
                ${Desc} {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(30px);
                    transition-delay: 0.5s;
                    
                    
                }
                ${TagCategoria} {
                    transform: scaleX(0);
                    transition-delay: 0.20s;
                }
            }
        }
    `

export const ImgArticulo = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;

        
    `

export const ContenidoArticulo = styled.div`
        
        
        pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
       
        
        
        &.contenido1{
            height: 80px;
            justify-content: space-between; 

            @media screen and (min-width: 320px) {
                width: 90%;
                
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                
            }
    
    
            @media screen and (min-width: 993px) {
                width: 648px;
                
            }
    
            @media screen and (min-width: 1200px) {
                width: 750px;
                
            }
        }

        &.contenido2{
            height: 32px;
            justify-content: center;

            @media screen and (min-width: 320px) {
                width: 80%;
                
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                
            }
    
    
            @media screen and (min-width: 993px) {
                width: 202px;
                
            }
    
            @media screen and (min-width: 1200px) {
                width: 230px;
               
            }
        }

        &.contenido3{
            width: 284px;
            height: 36px;
            justify-content: center;

            @media screen and (min-width: 320px) {
                width: 90%;
                
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                
            }
    
    
            @media screen and (min-width: 993px) {
                width: 295px;
                
            }
    
            @media screen and (min-width: 1200px) {
                width: 370px;
                
            }
        }

        &.contenido4{
            @media screen and (min-width: 320px) {
                width: 90%;
                
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                
            }
    
    
            @media screen and (min-width: 993px) {
                width: 555px;
                
            }
    
            @media screen and (min-width: 1200px) {
                width: 679px;
                
            }     
        }

        &.contenido5{
            justify-content: space-between;

            @media screen and (min-width: 320px) {
                
            }

            @media screen and (min-width: 768px) {
                width: 600px;
                
            }


            @media screen and (min-width: 993px) {
                width: 600px;
            
            }

            @media screen and (min-width: 1200px) {
                width: 750px;
                
            }
        }

        &.contenidoC{
            width: 233px;
            height: 32px;
            justify-content: center;

            @media screen and (min-width: 320px) {
                width: 90%;
                
            }
    
            @media screen and (min-width: 768px) {
                width: 688px;
                
            }
    
    
            @media screen and (min-width: 993px) {
                width: 202px;
                
            }
    
            @media screen and (min-width: 1200px) {
                width: 230px;
                
            }
        }

        &.contenido6{
            @media screen and (min-width: 320px) {
        
            }
        
            @media screen and (min-width: 768px) {
                width: 600px;
                
            }
        
        
            @media screen and (min-width: 993px) {
                width: 350px;
               
            }
        
            @media screen and (min-width: 1200px) {
                width: 400px;
                
            }
        }
    `