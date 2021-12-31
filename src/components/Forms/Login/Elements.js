import styled from "styled-components";
import { Form } from 'formik';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    

    
    
`



export const Wrapper = styled.div`
    
    

    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;

    border-radius: 1%;

    

   
`

export const FormulatioTitular = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    
    color: #FFFFFF;
`

export const Formulario = styled(Form)`
    

    @media screen and (min-width: 320px) {
        width: 80%;
        
    }

    @media screen and (min-width: 768px) {
        width: 515px;
        
    }


    @media screen and (min-width: 993px) {
        width: 515px;

    }

    @media screen and (min-width: 1200px) {
        width: 515px;

    }
    
`

export const InputsWrapper = styled.div`
   
    
    display: flex;
    align-items: center;
    
    
    

    @media screen and (min-width: 320px) {
        padding: 30px 0px 30px 30px;
        width: 80%;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: 768px) {
        width: 515px;
        flex-direction: row;    
        justify-content: space-between;
        margin: 30px 0px 30px 0px;
        padding: 0px 0px 0px 0px;
    }


    @media screen and (min-width: 993px) {
        width: 515px;
        flex-direction: row;
    }

    @media screen and (min-width: 1200px) {
        width: 515px;
        flex-direction: row;
    }
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    
    
`


export const ButtonSubmit = styled.button`
    cursor: pointer;
    border: none;
    
    width: 200px;
    height: 50px;
    background: #E80A40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 15px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }

`