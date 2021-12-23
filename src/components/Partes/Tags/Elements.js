import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
    
display: flex;
justify-content: center
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: flex-start;
    padding: 15px;    
    

    @media screen and (min-width: 320px) {
        width: 90%;
        min-height: 150px;
        
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 150px;
        
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        min-height: 150px;
    
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        min-height: 150px;
        
    }

    border-top: 1px solid black;
    
`

export const Titulo = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 36px;
/* identical to box height, or 200% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.035em;

color: #FFFFFF;
margin-right: 50px;
`

export const TagsWrap = styled.div`
display: grid;
row-gap: 100px;
column-gap: 20px;
align-items: center;
@media screen and (min-width: 320px) {
    width: 80%;
   
    column-gap: 20px;    
    min-height: 100px;
    row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 768px) {
    row-gap: 20px;
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}


@media screen and (min-width: 993px) {
    
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (min-width: 1200px) {
    
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

`
