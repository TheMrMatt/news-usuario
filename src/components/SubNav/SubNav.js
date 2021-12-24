import React, { useContext } from 'react'
import { PortadaContext } from '../../Store/context/PortadaContext';
import { Container, Wrapper, SubCat } from './Elements'

const SubNav = ({ subcats, cat }) => {
    const { startLoading } = useContext(PortadaContext);


    return (
        <>
            <Container>
                <Wrapper>
                    {
                        subcats.map(sub => <SubCat to={`/${cat.toLowerCase()}/${sub.subCategoria.toLowerCase()}`} exact='true' onClick={() => { startLoading() }}>{sub.subCategoria.toLowerCase()}</SubCat>)
                    }
                </Wrapper>
            </Container>
        </>
    )

}

export default SubNav
