import React from 'react'
import Tag from '../Tag/Tag'
import { Container, TagsWrap, Titulo, Wrapper } from './Elements'

const Tags = ({ tags }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Titulo>Tags:</Titulo>
                    <TagsWrap>
                        {
                            tags.map(tag => <Tag >{tag}</Tag>)
                        }
                    </TagsWrap>
                </Wrapper>
            </Container>
        </>
    )
}

export default Tags
