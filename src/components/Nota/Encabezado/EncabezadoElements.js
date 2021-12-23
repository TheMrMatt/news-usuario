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
    justify-content: space-evenly;
    padding-top: 75px;

    @media screen and (min-width: 320px) {
        width: 90%;
        height: 225px;     
        
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 225px; 
        
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        height: 225px;
    
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 225px;
        
    }

    
`

export const Autor = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    
    text-align: center;
    letter-spacing: -0.015em;

    color: #FFFFFF;
`

export const Categoria = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    
    text-align: center;
    letter-spacing: 0.115em;

    color: #FFFFFF;

`

export const FechaDePublicacion = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.015em;

    color: #FFFFFF;
`