import styled from 'styled-components'


export const PortadaContainer = styled.div`
    width: 100%;
    
    
    display: flex;
    flex-direction: row;
   
    justify-content: center;
    
    padding: 67px 0px 66px 0px; 
    @media screen and (min-width: 320px) {
        height: 1605px;
         
     }
 
     @media screen and (min-width: 768px) {
        height: 1605px;
         
     }
 
 
     @media screen and (min-width: 993px) {
        height: 733px;
         
     }
 
     @media screen and (min-width: 1200px) {
        height: 733px;
     }
`

export const Col1= styled.div`
    width: 750px;
    height: 600px;
    
    
    
    display: flex;
    
    flex-direction: column;
    
    align-items: center;
    
    @media screen and (min-width: 320px) {
       width: 90%;
        
        
        align-items: center;
        
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        
        
        align-items: center;
        
    }


    @media screen and (min-width: 993px) {
        width: 648px;
        height: 295px;
        margin-right: 20px;
        
    }

    @media screen and (min-width: 1200px) {
        width: 750px;
        height: 600px;
        margin-right: 50px;
    }

`

export const Col2= styled.div`

    
    display: none;
    @media screen and (min-width: 768px) {
        display: none;
    }


    @media screen and (min-width: 993px) {
        width: 325px;
        height: 585px ;
        
        display: flex;
        
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 600px;
        
        
        display: flex;
        
        justify-content: center;
    }
`

export const Recientes = styled.div`
    width: 400px;
    height: 600px;
   
    background: #121317;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 768px) {
        display: none;
    }


    @media screen and (min-width: 993px) {
        width: 325px;
        height: 585px ;
        
        display: flex;
        
        justify-content: space-around;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 600px;
        
        
        display: flex;
        
        
        justify-content: space-around;
    }
`

export const ContainerArticulos = styled.div`
    width: 750px;
    
    
   
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (min-width: 320px) {
        width: 100%;
        min-height: 1200px;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 1200px;
        flex-direction: column;
        justify-content: space-around;
    }


    @media screen and (min-width: 993px) {
        width: 648px;
        min-height: 254px;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 36px;
    }

    @media screen and (min-width: 1200px) {
        width: 750px;
        min-height: 275px;
        flex-direction: row;
        margin-top: 25px;
    }
    
`

export const RecientesTitulo = styled.div`
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4em;

    color: #FFFFFF;
`