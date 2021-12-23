import styled from 'styled-components'

export const CarouselC = styled.div`
position: relative;
width: 800px;
height: 270px;
overflow: hidden;
background-color: #cdcdcd;
`

export const CarouselItem = styled.div`
    position: absolute;
    width: 100%;
    height: 270px;
    border: 1px solid #2e2e2e;
    top: 0;
    left: 100%;
    &.active {
    left: 0;
    transition: all 0.3s ease-out;
    }
`

export const Color = styled.div`
    height: 100%;

    &.green{
        background: green;
    }
    &.red{
        background: red;
    }
    &.blue{
        background: blue;
    }
    &.yellow{
        background: yellow;
    }

`
