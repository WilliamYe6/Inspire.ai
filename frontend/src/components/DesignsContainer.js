import React from 'react'
import styled from 'styled-components'
import DesignDisplay from './DesignDisplay'

const DesignsContainer = ({designs}) => {
    // console.log(designs[0].url)

    const containerItems = designs.map((design) => 
        <DesignDisplay url={design.url} />
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