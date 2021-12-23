import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
height: 40px;
display: flex;

align-items: center;
background: #1A1B1F;

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
    height: 40px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1A1B1F;
}

@media screen and (min-width: 1200px) {
    width: 100%;
    height: 40px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1A1B1F;
}
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;



@media screen and (min-width: 320px) {
    width: 435px;
        height: 18px;
    
}


@media screen and (min-width: 768px) {
    width: 435px;
    height: 18px;
    
}


@media screen and (min-width: 993px) {
    width: 435px;
    height: 18px;
}

@media screen and (min-width: 1200px) {
    width: 435px;
    height: 18px;
}
`

export const SubCat = styled(LinkR)`
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
`