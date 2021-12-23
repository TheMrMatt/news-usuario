import styled from 'styled-components'


export const PortadaContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PortadaWrap = styled.div`
    width: 1200px;
    height: 800px;
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 320px) {
        flex-direction: column;
        height: 1200px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
        height: 1330px; 
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        height: 700px;
        flex-direction: row;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 800px;
        flex-direction: row;
    }

`

export const Col1 = styled.div`
    width: 750px;
    height: 600px;

    @media screen and (min-width: 320px) {
        width: 90%;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    @media screen and (min-width: 993px) {
        width: 600px;
        height: 500px;
        
    }

    @media screen and (min-width: 1200px) {
        width: 750px;
        height: 600px;
        
    }

`

export const Col2 = styled.div`
    width: 400px;
    height: 600px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 320px) {
        width: 90%;
        height: 750px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 750px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    @media screen and (min-width: 993px) {
        width: 350px;
        height: 500px;
        justify-content: space-between;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 600px;
        
    }

`