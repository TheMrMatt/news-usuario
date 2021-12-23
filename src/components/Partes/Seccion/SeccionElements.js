import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';

export const SectionContainer = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    

    @media screen and (min-width: 320px) {
        flex-direction: column;
        height: 1400px;
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
        height: 1330px;
    }


    @media screen and (min-width: 993px) {
        flex-direction: column;
        height: 500px;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: column;
        height: 500px;
    }

`

export const SectionWrap1 = styled.div`
    
    width: 1200px;
    height: 275px;
    
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;


    @media screen and (min-width: 320px) {
        width: 90%;
        height: 1330px;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
        height: 1330px;
        flex-direction: column;
        justify-content: space-around;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        height: 254px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 275px;
        flex-direction: row;
        justify-content: space-between;
    }
    
`

export const SectionWrap2 = styled.div`
width: 1200px;
height: 275px;


display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;


@media screen and (min-width: 320px) {
    width: 90%;
    height: 1330px;
    flex-direction: column;
    justify-content: space-around;
}

@media screen and (min-width: 768px) {
    width: 768px;
    height: 1330px;
    flex-direction: column;
    justify-content: space-around;
}


@media screen and (min-width: 993px) {
    width: 993px;
    height: 254px;
    flex-direction: row;
    justify-content: space-between;
}

@media screen and (min-width: 1200px) {
    width: 1200px;
    height: 275px;
    flex-direction: row;
    justify-content: space-between;
}
`

export const TituloSeccion = styled(LinkR)`
   
    
    font-style: normal;
    font-weight: bold;
    
    line-height: 32px;

    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4em;

    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 16px;
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
`