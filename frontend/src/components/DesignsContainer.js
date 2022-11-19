import React from 'react'
import styled from 'styled-components'
import DesignDisplay from './DesignDisplay'

const DesignsContainer = ({designs}) => {

    const containerItems = designs.map((design, i) => 
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
    align-items:center;
    justify-content: space-between;
    flex-direction:row;
    width:80%;
`



export default DesignsContainer