import React from 'react'
import {Container, Wrapper, TituloNota, Resumen, ImgWrapper, ImgNota, NotaBody} from './CuerpoNotaElements'

const CuerpoNota = ({nota}) => {

    console.log(nota);

    return (
        <>
            <Container>
                <Wrapper>
                    <TituloNota>{nota.titulo}</TituloNota>
                    <Resumen>
                        {nota.descripcion}
                    </Resumen>
                    <ImgWrapper>
                        <ImgNota src={nota.img[0].url}/>
                    </ImgWrapper>
                    <NotaBody>
                        <div  dangerouslySetInnerHTML={{__html: nota.contenido}}></div>
                        

                    </NotaBody>
                   
                </Wrapper>
             </Container>
        </>
    )
}

export default CuerpoNota
