import React, { useEffect, useContext } from 'react'
import { NotasContext } from '../../Store/context/NotasContext'
import { PortadaContainer, ImgArticulo, ContenidoArticulo, ArticuloTitle, ImgOverlay, Cover, Desc, TagCategoria, Tag } from './NewsElements'


const Portada1 = ({ nota, container, contenido, titulo, desc }) => {
    const { startLoading } = useContext(NotasContext)
    console.log('portada', nota);
    return (
        <>
            <PortadaContainer className={container} to={`/nota/${nota.id}`} onClick={() => { startLoading() }}>
                <ImgOverlay>
                    <TagCategoria>
                        <Tag>
                            {
                                nota.subCategoria === "" || nota.subCategoria === 'undefined' ? nota.categoria : nota.subCategoria
                            }
                        </Tag>
                    </TagCategoria>
                    <Cover>
                        <ImgArticulo src={nota.img} url={nota.img} />
                    </Cover>
                </ImgOverlay>

                <ContenidoArticulo className={contenido}>
                    <ArticuloTitle className={titulo}>{nota.titulo}</ArticuloTitle>
                    <Desc className={desc}>{nota.descripcion}</Desc>
                </ContenidoArticulo>
            </PortadaContainer>
        </>
    )
}

export default Portada1
