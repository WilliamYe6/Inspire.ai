import React from "react";
import styled from "styled-components";
import { Select, MenuItem, Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import {BounceLoader, PacmanLoader} from 'react-spinners'



const Form = ({design, setDesign}) => {

  const navigate = useNavigate()
  const [subCategory, setSubCategory] = useState('');
  const [theme, setTheme] = useState('');
  const [color, setColor] = useState('');
  const [site, setSite] = useState('');
  const [loading, setLoading] = useState(false)
  var str = " ";

  const handleSubmit = async (event) => {
    console.log(color);

    str =  "A " + color + " " + theme + " " + subCategory + " web design site like " + site;

  postString()

 };

 async function postString(){
  setLoading(true)
  console.log("string: ", str)
  console.log(loading)
  await fetch( "http://localhost:5000/api/postPrompt", {
    method: 'POST',
    body: JSON.stringify({
      prompt: str
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        sessionStorage.setItem('data', data)
        sessionStorage.setItem('color', color)
        sessionStorage.setItem('theme', theme)
        sessionStorage.setItem('subCategory', subCategory)
        setLoading(false)
        navigate('/upload')
        // setDesign({
        //   data: data,
        //   color: color,
        //   theme: theme,
        //   subCategory: subCategory
        // })
        // console.log(design)
        console.log(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     });

}


 

 
 return (
   <Div>
    { !loading ? 
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
           <MenuItem value={"vibrant"}>Vibrant</MenuItem>
           <MenuItem value={"spooky"}> Spooky</MenuItem>
           <MenuItem value={"sombre"}>Sombre</MenuItem>
           <MenuItem value={"rich"}>Rich</MenuItem>
         </Select>
       </FormControl>

       <FormControl
        style={{
          width: "47%",
          marginTop: "5%",
        }}>
       <InputLabel id="demo-simple-select-label">Set Site</InputLabel>
         <Select onChange={(e) => setSite(e.target.value)}>
           <MenuItem value={"amazon"}>Amazon</MenuItem>
           <MenuItem value={"shopify"}>Shopify</MenuItem>
           <MenuItem value={"pinterest"}>Pinterest</MenuItem>
           <MenuItem value={"facebook"}>Facebook</MenuItem>
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
     :
     <LoaderDiv>
      <Title>Generating outputs ...</Title>
      <BounceLoader color="#395470" size={150}/>
     </LoaderDiv> }
   </Div>
 );
};
 
const Div = styled.div`
 padding: 20px;
 margin: 10px;
`;

const Title = styled.div`
  margin-bottom: 45px;
  font-size: 30px;
`

const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin-top: 15%;
`

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