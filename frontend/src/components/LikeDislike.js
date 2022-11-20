import React from 'react'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import styled from 'styled-components'
import {useEffect, useState} from 'react'

const LikeDislike = ({handleLike, handleDislike, likes, dislikes}) => {
  return (
    <ButtonBox>
        <HoverBox>
            <FiThumbsUp className="icon"
                size="30px"
                color="green"
                onClick={handleLike}
                />
        </HoverBox>
            {likes}
        <HoverBox>
            <FiThumbsDown className="icon"
                size="30px"
                color="red"
                onClick={handleDislike}
                />
        </HoverBox>
            {dislikes}
    </ButtonBox>
  )
}

const ButtonBox = styled.div`
    margin-top: 15px;
    display:flex;
    align-items:center;
    justify-content:space-around;

`

const HoverBox = styled.div`
    &:hover{
        cursor: pointer;
    }
`

export default LikeDislike