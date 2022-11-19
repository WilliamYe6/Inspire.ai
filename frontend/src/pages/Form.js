import React from 'react'
import styled from 'styled-components'

const Form = () => {
  return (
    <Div>
      <ParentForm>
          form
      </ParentForm>
      <ColorTheme>
        COLOR THEME CATEGORY
      </ColorTheme>

    </Div>
  )
}

const Div = styled.div`
  padding: 20px;
  margin: 10px;

`
const ParentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 20%;
  padding: 15px;
`

const ColorTheme = styled.div`
  padding: 20px;
  margin: 10px;
  width: 100%;
  left: 0px;
  position: absolute;
  text-align: center;
  bottom: 100px;
  color: red;
  font-weight: bold;
`


export default Form