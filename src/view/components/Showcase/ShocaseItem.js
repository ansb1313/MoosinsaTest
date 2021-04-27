import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { placementDirection } from '../../../lib/Common'

const ShocaseItem = ({data, index}) => {

    return(
        <Container className={cn("showcaseItem", 
        {isActive:placementDirection(index)})}>
          <Title>
            <h4>{data.title}</h4>
          </Title>
          <Desc>
            <p>{data.desc}</p>
          </Desc>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    border: solid 1px #111;
    display: flex;
    flex-direction: column;
    &.isActive{
        align-items: flex-end;
    }
`
const Title = styled.div`
    width: 100px;
    height: 40px;
    border:solid 1px #111;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Desc = styled.div`
    width:400px;
    height: 100px;
    border:solid 1px #111;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    p{
        display:inline-block;
    }
`
export default ShocaseItem