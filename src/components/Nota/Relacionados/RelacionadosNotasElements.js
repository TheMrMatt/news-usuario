import styled from 'styled-components'

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

    border-top: 1px solid black;
    
`

export const Row = styled.div`
    width: 1200px;
    height: 275px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (min-width: 320px) {
        width: 90%;
        height: 1550px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 1550px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        height: 254px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 275px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row; 
    }

    
`