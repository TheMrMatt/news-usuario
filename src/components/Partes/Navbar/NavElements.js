import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { FaUserCircle, FaBars, FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";

export const NavbarContainer = styled.div`  
    width: 100%;
    height: 60px;
    top: 0;
    display: flex;
    
    align-items: center;
    background: #121317;

    @media screen and (min-width: 320px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }


    @media screen and (min-width: 993px) {
        width: 100%;
        height: 60px;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #121317;
    }

    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 60px;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #121317;
    }
`

export const Nav = styled.div`
    width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    

    @media screen and (min-width: 320px) {
        width: 90%;
        
    }


    @media screen and (min-width: 768px) {
        width: 688px;
        
    }


    @media screen and (min-width: 993px) {
        width: 993px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }

    
`

export const HamburgerMenu = styled(FaBars)`
    
    width: 41px;
    height: 41px;
    color: #E80A40;
    cursor: pointer;   

    @media screen and (min-width: 768px) {
        width: 41px;
        height: 41px;
        color: #E80A40;
        cursor: pointer; 
    }


    @media screen and (min-width: 993px) {
        display: none;
    }

    @media screen and (min-width: 1200px) {
        display: none;
    }
`

export const FaIcon = styled(FaFacebookSquare)`
    width: 30px;
    height: 30px;
    cursor: pointer;    
    color: white;
    margin-right: 25px;
`

export const GoIcon = styled(FcGoogle)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 25px;
`

export const Logo = styled(LinkR)`
    
width: 198px;
height: 44px;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
text-decoration: none;
letter-spacing: 0.1em;

color: #FFFFFF;
    
`

export const User = styled.div`
    width: 41px;
    height: 41px;
    color: #E80A40;
    cursor: pointer;   
    
    border-radius: 50%;
`

export const OpenM = styled.div`
    width: 40px;
    height: 40px;
    color: #E80A40;
    border: 1p solid red;
`

export const Uicon = styled(FaUserCircle)`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const UserImg = styled.img`
    width: 41px;
    height: 41px;
    cursor: pointer;  
    border: 1px solid grey;
    border-radius: 50%;
`

export const Categorias = styled.ul`
    display: none;    

    @media screen and (min-width: 320px) {
        &.desple {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            
        }
    }


    @media screen and (min-width: 768px) {
        &.desple {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            
        }
    }


    @media screen and (min-width: 993px) {
        width: 435px;
        height: 18px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        &.desple {
            display: none;   
        }
    }

    @media screen and (min-width: 1200px) {
        width: 435px;
        height: 18px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        &.desple {
            display: none;   
        }
    }

`
export const CategoriaLink = styled(LinkR)`
    
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: -0.015em;
    transition: all 0.2s ease-in-out;
    color: #FFFFFF;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }

    &.desple {
        height: 75px;
        font-size: 32px;
        
    }
`

export const Log = styled.button`
    
    display:none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: black;
        
    }

    @media screen and (min-width: 768px) {
        display:none;
    }


    @media screen and (min-width: 993px) {
        width: 130px;
        height: 40px;
        background: #E80A40;
        color: white;
        border-radius: 6px;
        white-space: nowrap;
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }

    @media screen and (min-width: 1200px) {
        width: 130px;
        height: 40px;
        background: #E80A40;
        color: white;
        border-radius: 6px;
        white-space: nowrap;
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }

`

export const usuarioContainer = styled.div`
width: 200px;
height: 60vh;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;
    
    position: absolute;
    top: 59px;
    border: 1px solid red;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1000000;
    
    &.act{
        right: 0%;
        width: 200px;
        height: 60vh;
    }
    &.desact {
        right: -100%;
        width: 200px;
        height: 100px;
    }

    
    

`

export const Desplegable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #1A1B1F;
    height: 60vh;
    position: absolute;
    top: 59px;
    
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1000000;
    
    &.act{
        left: 0%;
    }
    &.desact {
        left: -100%;
    }

    
    @media screen and (min-width: 993px) {
        display:none;
    }
    
    @media screen and (min-width: 1200px) {
        display:none;
    }

`