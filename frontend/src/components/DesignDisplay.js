import React from 'react'
import styled from 'styled-components'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'

const DesignDisplay = ({url}) => {

    const handleLike = async() => {
        await fetch( "http://localhost:5000/api/postDesign", {
        method: 'POST',
        body: JSON.stringify({
            name: 'thing',
            url: 'google.com',
            color: 'blue',
            theme: 'red',
            subcategory: 'red',
            category: 'category'
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

  return (
    <ParentContainer>
            <Image src={url} alt="" />
            <ButtonBox>
                <FiThumbsUp className="icon"
                    size="30px"
                    color="green"
                    onClick={handleLike}
                    />
                <FiThumbsDown className="icon"
                    size="30px"
                    color="red"
                    />
            </ButtonBox>
    </ParentContainer>
  )
}

const Image = styled.img`
    width: 100%;
    height:100%;
    border-radius: 12px;
    z-index: -1;
    
`

const ParentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:center;
    padding:10px;
`
const ButtonBox = styled.div`
    margin-top: 15px;
    display:flex;
    align-items:center;
    justify-content:space-around;

`

export default DesignDisplay