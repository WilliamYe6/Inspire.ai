import React from 'react'
import styled from 'styled-components'
import DesignDisplay from './DesignDisplay'

const DesignsContainer = ({designs}) => {

    const containerItems = designs.map((design, i, id, likes, dislikes) => 
        <DesignDisplay url={design.url} key={i} id={design._id} likes={design.likes} dislikes={design.dislikes}/>
    )

  return (
    <Container>
        {containerItems}
    </Container>
  )
}
const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: flex-start;
    flex-direction:row;
    width:90%;
    z-index: 100;
`



export default DesignsContainer