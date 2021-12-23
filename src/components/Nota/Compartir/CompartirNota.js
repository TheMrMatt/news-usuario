import React from 'react'
import { Container, Wrapper, RedesWrap, Redes, RedesFacebook, RedesTwitter, RedesWhatsapp, FaceIcon, InstaIcon, TwitterIcon, YoutubeIcon, Guardar } from './CompartirNotaElements'



const CompartirNota = ({ nota }) => {

    const shareUrl = window.location.href.toString();
    console.log('share', shareUrl)
    return (
        <>
            <Container>
                <Wrapper>
                    <RedesWrap>
                        <RedesFacebook url={shareUrl}>
                            <FaceIcon />
                        </RedesFacebook>
                        <RedesTwitter url={shareUrl} title={nota.titulo}><TwitterIcon /></RedesTwitter>
                        <RedesWhatsapp url={shareUrl} title={nota.titulo} separator={" "}><InstaIcon /></RedesWhatsapp>
                        <Guardar />
                        <Redes onClick={() => navigator.clipboard.writeText(shareUrl)}><YoutubeIcon /></Redes>
                    </RedesWrap>
                </Wrapper>
            </Container>
        </>
    )
}

export default CompartirNota
