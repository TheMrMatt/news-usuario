import React from 'react'
import {HeroContainer,NewsCard, NewsImg, ImgOverlay,ArticleTitle,ArticleDescription,ArticleContent} from './HeroElements'


const Hero = ({nota}) => {
    console.log('nota del dia', nota)
    return (
        <>
            <HeroContainer>

                <NewsCard>
                    <ImgOverlay>
                        <NewsImg src={nota.img}/>
                    </ImgOverlay>      
                    <ArticleContent>
                        <ArticleTitle>{nota.titulo}</ArticleTitle>    
                        <ArticleDescription>{nota.descripcion}</ArticleDescription>
                    </ArticleContent>
                    
                </NewsCard>

            </HeroContainer>
        </>
    )
}

export default Hero
