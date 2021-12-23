import styled from 'styled-components'


export const HeroContainer = styled.div`
    width: 100%;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImgOverlay = styled.div`
    width: 100%;
    max-height: 400px;
    
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

export const ImgHero = styled.img`
    width: 100%;
    max-height: 400px;
    -o-object-fit: cover;
    object-fit: cover;
`

export const SubSectionName = styled.div`
    position: absolute;

    font-size: 48px;
    line-height: 72px;
    /* identical to box height, or 150% */

    letter-spacing: -0.015em;

    color: #FFFFFF;
    z-index: 5;
`