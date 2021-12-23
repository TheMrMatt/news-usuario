import styled from 'styled-components'


export const HeroContainer = styled.div`
    width: 100%;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;

    
    @media screen and (min-width: 768px) {
        width: 100%;
        min-height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: red;
    }


    @media screen and (min-width: 993px) {
        width: 100%;
        min-height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: red;
    }

    @media screen and (min-width: 1200px) {
        width: 100%;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: blue;
    }

`
export const NewsCard = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ImgOverlay = styled.div`
    width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 0%, rgba(255, 255, 255, 0) 100%), rgba(0, 0, 0, 0.58);
        z-index: 2;
    }


    

`

export const NewsImg = styled.img`
    width: 100%;
    height:350px;
    -o-object-fit: cover;
    object-fit: cover;
    
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }


    @media screen and (min-width: 993px) {
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

`

export const ArticleContent = styled.div`
    z-index: 3;
    max-width: 1200px;
   
    position: absolute;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

    
`

export const ArticleTitle = styled.h1`
            
    font-weight: bold;
    font-size: 18px;
    line-height: 80px;

    text-align: center;
    letter-spacing: -0.015em;

    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 14px;
    }


    @media screen and (min-width: 768px) {
        font-size: 18px;
    }


    @media screen and (min-width: 993px) {
        font-size: 28px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 28px;
    }
`

export const ArticleDescription = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;

    text-align: center;
    letter-spacing: -0.015em;
    width: 500px;
    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 10px;
        width: 300px;
        
    }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        width: 500px;
    }


    @media screen and (min-width: 993px) {
        font-size: 14px;
        width: 500px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
        width: 600px;
    }
`