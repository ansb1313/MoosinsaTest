import React, { useState } from 'react'
import styled from 'styled-components'

const ShowcaseHorizontalLayer = ({pageNum}) => {
    
    const [page, setPage] = useState(0)


    return(
        <Container>
            <HorizontalMainLayer>
                main
            </HorizontalMainLayer>

        </Container>
    )
}

const Container = styled.div`
    background: #ddd;
    display: flex;
    width: 100%;
    height: 100%;
    transition:all 0.65s cubic-bezier(.93,0,.63,0.1);
    /* transform: translateX(${props => props.leftSlide}); */
`
const HorizontalMainLayer = styled.div`
    border: solid 2px blue;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`   
const HorizontalOtherLayer = styled.div`
    width: 300%;
    height:100%;
    left: 100%;
    position: absolute;
    display: flex;
`
const OtherLayer = styled.div`
    border: solid 1px #111;
    width:100%;
    height: 100%;
`

export default ShowcaseHorizontalLayer
