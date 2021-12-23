import React from 'react'
import {HeroContainer, ImgHero, SubSectionName, ImgOverlay} from './Elements'

const HeroSeccion = ({seccion}) => {
    return (
        <>
            <HeroContainer>
                    <SubSectionName>{seccion}</SubSectionName>
                    <ImgOverlay>
                        <ImgHero src='https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
                    </ImgOverlay>
                    
                    
            </HeroContainer>
        </>
    )
}

export default HeroSeccion