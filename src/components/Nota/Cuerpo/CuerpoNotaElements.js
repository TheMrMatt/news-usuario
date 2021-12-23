import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    

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

export const TituloNota = styled.div`
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #FFFFFF;

    margin-bottom: 50px;
`

export const Resumen = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.45em;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #FFFFFF;

    margin-bottom: 50px;
`

export const ImgWrapper = styled.div`
    width: 100%;
    max-height: 577px;
    margin-bottom: 50px;
`

export const ImgNota = styled.img`
    width: 100%;
    max-height: 577px;
`

export const NotaBody = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    /* or 25px */

    text-align: center;
    letter-spacing: -0.015em;

    color: #FFFFFF;

    margin-bottom: 100px;
`