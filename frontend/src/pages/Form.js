import React from "react";
import styled from "styled-components";

import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Select, MenuItem, Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const Form = () => {
  return (
    <Div>
      <ParentForm>
        Design
        <FormControl
          style={{
            width: "47%",
            marginTop: "5%",
          }}
        >
          <InputLabel id="demo-simple-select-label"> Sub Category</InputLabel>
          <Select>
            <MenuItem value={10}>E-Commerce</MenuItem>
            <MenuItem value={20}>Blog</MenuItem>
            <MenuItem value={30}>Social Media</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{
            width: "47%",
            marginTop: "5%",
          }}
        >
          <InputLabel id="demo-simple-select-label">Theme</InputLabel>
          <Select>
            <MenuItem value={10}>Futuristic</MenuItem>
            <MenuItem value={20}>Modern</MenuItem>
            <MenuItem value={30}>Old School</MenuItem>
            <MenuItem value={30}>Web 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{
            width: "47%",
            marginTop: "5%",
          }}
        >
          <InputLabel id="demo-simple-select-label">Color Theme</InputLabel>
          <Select>
            <MenuItem value={10}>Black</MenuItem>
            <MenuItem value={20}>White</MenuItem>
            <MenuItem value={30}>Orange</MenuItem>
            <MenuItem value={30}>Brown</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          style={{
            marginTop: "5%",
            position: "relative",
            borderRadius: "5px",
            color: "white",
            borderColor: "black",
            borderWidth: "2px",
            width: "20%",
            backgroundColor: "black",
            fontFamily: "Sono, sans-serif",
          }}
        >
          Generate
        </Button>

      </ParentForm>
    </Div>
  );
};

const Div = styled.div`
  padding: 20px;
  margin: 10px;
`;
const ParentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-family: 'Sono', sans-serif;;
  margin: 0 20%;
  padding: 15px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-weight: bold;
  * {
    margin-top: 20%;
    left: 20%;
  }
`;

export default Form;
