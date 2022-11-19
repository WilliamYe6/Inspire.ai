import React from 'react'
import styled from 'styled-components'

const DesignDisplay = ({url}) => {
    

  return (
    <Div>
        <Image src={url} alt="" />
    </Div>
  )
}

const Image = styled.img`
    width: 100%;
    border-radius: 12px;
`

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    width:30%;
    &:hover{
        filter: blur(1px)
    }
`

export default DesignDisplay