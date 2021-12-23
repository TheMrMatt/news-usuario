import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    
`

export const Wrapper = styled.div`
    width: 1200px;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
    @media screen and (min-width: 320px) {
        width: 100%;
        min-height: 350px;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 350px;
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        min-height: 354px;   
        
        flex-direction: column;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        min-height: 500px; 
        
        flex-direction: column;
    }

    
`

export const Row = styled.div`
    width: 1200px;
    
    margin-bottom: 50px;
    display: grid;
    row-gap: 100px;

    @media screen and (min-width: 320px) {
        width: 90%;
       
        margin-top: 50px;
        
        grid-template-columns: repeat(1, 25%);
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        
        margin-bottom: 50px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    
`

export const Marco = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    
`