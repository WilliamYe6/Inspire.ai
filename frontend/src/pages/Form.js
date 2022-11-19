import React from 'react'
import styled from 'styled-components'

import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { Select,MenuItem} from '@mui/material';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const Form = () => {
  return (
    <Div>
      <ParentForm>
        Design

        <FormControl  style={{
          width:  "47%",
          marginTop: "5%"
          
        }} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select     
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>




      <FormControl  style={{
          width:  "47%",
          marginTop: "5%"
          
        }} >
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select     
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>


      


                 

        
      
      </ParentForm>
    </Div>
  )
}

const Div = styled.div`
  padding: 20px;
  margin: 10px;

`
const ParentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family:'Times New Roman', Times, serifç;
  font-size:40px;

  margin: 0 20%;
  padding: 15px;
`

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-weight: bold;
  *{
    margin-top: 20%;
    left: 20%;

  }


`








export default Form