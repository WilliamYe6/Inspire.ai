import React from "react";
import styled from "styled-components";

import { Select, MenuItem, Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const Form = () => {
  const [subCategory, setSubCategory] = useState();
  const [theme, setTheme] = useState();
  const [color, setColor] = useState();

  const handleSubmit = async (event) => {
    console.log(color);
    var str = " ";
    console.log(str);

    if (color == undefined) {
      setColor(" ");
    }

    if (theme == undefined) {
      setTheme(" ");
      console.log(theme);
    }

    if (subCategory == undefined) {
      setSubCategory(" ");
    }

    str =
      "I want a " + color + " " + theme + " " + subCategory + " web design.";

    console.log(str);
  };

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
          <Select onChange={(e) => setSubCategory(e.target.value)}>
            <MenuItem value={"E-Commerce"}>E-Commerce</MenuItem>
            <MenuItem value={"Blog"}>Blog</MenuItem>
            <MenuItem value={"Social Media"}>Social Media</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{
            width: "47%",
            marginTop: "5%",
          }}
        >
          <InputLabel id="demo-simple-select-label">Theme</InputLabel>
          <Select onChange={(e) => setTheme(e.target.value)}>
            <MenuItem value={"Futureistic"}>Futuristic</MenuItem>
            <MenuItem value={"Modern"}>Modern</MenuItem>
            <MenuItem value={"Old School"}>Old School</MenuItem>
            <MenuItem value={"Web 3"}>Web 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{
            width: "47%",
            marginTop: "5%",
          }}
        >
          <InputLabel id="demo-simple-select-label">Color Theme</InputLabel>
          <Select onChange={(e) => setColor(e.target.value)}>
            <MenuItem value={"Black"}>Black</MenuItem>
            <MenuItem value={"White"}>White</MenuItem>
            <MenuItem value={"Orange"}>Orange</MenuItem>
            <MenuItem value={"Brown"}>Brown</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
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
  font-family: "Sono", sans-serif;
  margin: 0 20%;
  padding: 15px;
`;

export default Form;
