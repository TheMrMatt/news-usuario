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
        width: 700px;
        
    }


    @media screen and (min-width: 993px) {
        width: 700px;

    }

    @media screen and (min-width: 1200px) {
        width: 700px;

    }
   
    
`

export const InputsWrapper = styled.div`
    
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 30px 0px 30px 0px;
    
    @media screen and (min-width: 320px) {
        width: 80%;
        
    }

    @media screen and (min-width: 768px) {
        width: 700px;
        
    }


    @media screen and (min-width: 993px) {
        width: 700px;

    }

    @media screen and (min-width: 1200px) {
        width: 700px;

    }
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    
    
`

export const Wrap = styled.div`
    
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
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

export const InputContainer = styled.div`
    height: 85px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    

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

export const FileInput = styled.input`
    
`

export const FileLabel = styled.label`
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-bottom: 10px;

    /* Secondary/Base */

    color: #262626;
`