import React, { useContext } from 'react'
import { NotasContext } from '../../../Store/context/NotasContext'
import { TagCont, TagTitulo } from './Elements'

const Tag = ({ children }) => {
    const { startLoading } = useContext(NotasContext)


    return (
        <>
            <TagCont to={`/tag/${children}`} exact='true' onClick={() => { startLoading() }}>
                <TagTitulo>
                    {children}
                </TagTitulo>
            </TagCont>
        </>
    )
}

export default Tag
