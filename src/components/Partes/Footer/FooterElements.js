import styled from 'styled-components'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa'


export const FooterContainer = styled.div`
    width: 100%;
    height: 400px;
    background: #121317;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

`

export const FooterWrapper = styled.div`
    width: 1200px;
    height: 129px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    


    @media screen and (min-width: 320px) {
        width: 298px;
        height: 210px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }
    
    @media screen and (min-width: 768px) {
        width: 298px;
        height: 210px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }
    
    
    @media screen and (min-width: 993px) {
        width: 993px;
        height: 135px;
        flex-direction: row;
        margin-bottom: 50px;
    }
    
    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 129px;
        flex-direction: row;
        margin-bottom: 50px;
    }

`

export const Logo = styled.div`
    width: 198px;
    height: 44px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;

    color: #FFFFFF;
`

export const ContentWrapper = styled.div`
    width: 361px;
    height: 129px;
    display: flex;
    flex-direction: row;
    


    @media screen and (min-width: 320px) {
        flex-direction: row;
        width: 100%;
        height: 129px;
        justify-content: space-between;
        
    }
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        height: 129px;
        justify-content: space-between;
       
    }
    
    
    @media screen and (min-width: 993px) {
        flex-direction: row;
        width: 321px;
        height: 136px;  
    }
    
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        width: 361px;
        height: 129px;
        margin-right: 20px;
    }
`

export const ContenteWrap = styled.div`
    margin-right: 0px;
    @media screen and (min-width: 320px) {
        margin-right: 0px;
        
    }
    
    @media screen and (min-width: 768px) {
        margin-right: 0px;
    }
    
    
    @media screen and (min-width: 993px) {
        margin-right: 50px;
        
    }
    
    @media screen and (min-width: 1200px) {
        margin-right: 120px;
        
    }
`

export const ContentTitle = styled.div`
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
   

    color: #FFFFFF;
`

export const Item = styled.div`
    width: 140px;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */

    letter-spacing: -0.015em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

export const FooterWrapper2 = styled.div`
    width: 306px;
    height: 106px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top: 1px solid #DFE0EB;
    padding-top: 50px;

    @media screen and (min-width: 320px) {
        width: 320px;
        height: 106px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }
    
    @media screen and (min-width: 768px) {
        width: 400px;
        height: 106px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    
    @media screen and (min-width: 993px) {
        width: 993px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
    
    @media screen and (min-width: 1200px) {
        width: 1200px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    
`

export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 24px;
    /* identical to box height, or 160% */

    letter-spacing: -0.015em;

    color: #FFFFFF;

   
`

export const Follow = styled.div`
    font-size: 15px;
    line-height: 24px;
    /* identical to box height, or 160% */

    text-align: right;
    letter-spacing: -0.015em;

    color: #FFFFFF;
    @media screen and (min-width: 320px) {
        display: none;
    }
    
    @media screen and (min-width: 768px) {
        display: none;
    }
    
    
    @media screen and (min-width: 993px) {
        font-size: 15px;
        line-height: 24px;
        /* identical to box height, or 160% */

        text-align: right;
        letter-spacing: -0.015em;

        color: #FFFFFF;
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 15px;
        line-height: 24px;
        /* identical to box height, or 160% */
    
        text-align: right;
        letter-spacing: -0.015em;
    
        color: #FFFFFF;
    }
`

export const RedesWrap = styled.div`
    width: 400px;     
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 320px) {
        width: 300px;    
    }
    
    @media screen and (min-width: 768px) {
        width: 400px;    
    }
    
    
    @media screen and (min-width: 993px) {
        width: 400px;    
    }
    
    @media screen and (min-width: 1200px) {
        width: 400px;    
    }

`

export const Redes = styled.div`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    
`

export const FaceIcon = styled(FaFacebookSquare)`
    width: 100%;     
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

export const InstaIcon = styled(FaInstagramSquare)`
    width: 100%;     
    height: 100%; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

export const TwitterIcon = styled(FaTwitterSquare)`
    width: 100%;     
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

export const YoutubeIcon = styled(FaYoutubeSquare)`
    width: 100%;     
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`