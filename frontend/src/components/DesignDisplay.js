import React from 'react'
import styled from 'styled-components'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'

const DesignDisplay = ({url}) => {
    const handleHover = () =>{
        document.getElementsByClassName('icon')[0].style.opacity = '1'
    }

  return (
    <ParentContainer>
        <Div onMouseOver={handleHover}>
            <Image src={url} alt="" />
            <ButtonBox>
                <FiThumbsUp className="icon"
                    style={{
                    position: 'absolute',
                    }}
                    size="30px"
                    color="green"
                    />
                <FiThumbsDown className="icon"
                    style={{
                    position: 'absolute',
                    }}
                    size="30px"
                    color="red"
                    />
            </ButtonBox>
        </Div>
    </ParentContainer>
  )
}

const Image = styled.img`
    width: 100%;
    height:100%;
    border-radius: 12px;
    z-index: -1;
    
`

const Div = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    width:80%;

    min-height: 220px;
    
`
const ParentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ButtonBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;

`

export default DesignDisplay