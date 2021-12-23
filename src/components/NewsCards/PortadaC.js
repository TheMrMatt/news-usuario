import React, { useContext } from 'react'
import { NotasContext } from '../../Store/context/NotasContext'
import { PortadaContainer, ImgOverlay, ImgArticulo, ContenidoArticulo, ArticuloTitle, Cover, Desc, TagCategoria, Tag } from './NewsElements'

const PortadaC = ({ nota, container, contenido, titulo, desc }) => {

    const { startLoading } = useContext(NotasContext)
    return (
        <>
            <PortadaContainer className={container} to={`/nota/${nota._id}`} onClick={() => { startLoading() }}>
                <ImgOverlay>
                    <TagCategoria>
                        <Tag>
                            {
                                nota.subCategoria === "" || nota.subCategoria === 'undefined' ? nota.categoria : nota.subCategoria
                            }
                        </Tag>
                    </TagCategoria>
                    <Cover>
                        <ImgArticulo src={nota.img[0].url} />
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
//a
export default PortadaC
