import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const TagTitulo = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: normal;

line-height: 36px;
/* identical to box height, or 200% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.025em;
transition: all 0.5s ease-in-out;
color: #FFFFFF;

@media screen and (min-width: 320px) {
    font-size: 12px;
}
@media screen and (min-width: 768px) {
    font-size: 18px;
}

`

export const TagCont = styled(LinkR)`
    
    background-color: #E80A40;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 50px;
    cursor: pointer;    
    transition: all 0.5s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;
    @media screen and (min-width: 320px) {
        width: 80px;
        height: 30px;
    }
    @media screen and (min-width: 768px) {
        width: 150px;
        height: 50px;
    }

    &:hover {
        background-color: #FFF;    

        ${TagTitulo} {
            color: #E80A40;
        }
    }
`
