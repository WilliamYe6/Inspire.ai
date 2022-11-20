import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import DesignContainer from '../components/DesignsContainer'


const Leaderboard = () => {

    const [designs, setDesigns] = useState([])
    
  
    useEffect(() => {
      async function getDesigns(){
        const response = await fetch(`http://localhost:5000/api/getAllDesigns`)
  
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
          }
          
          const designs = await response.json();
         
          
          designs.sort((a,b)=>a.likes-b.likes)

          console.log(designs)
          //const ratioAlgo = designs.map((design) => design.likes -Math.random())
          //ratioAlgo.sort()
          //const n_designs = ratioAlgo.slice(0, 6) //want objects with this
          const ordered = algo(designs)
          const n_designs = ordered 
          setDesigns(n_designs)
          console.log(n_designs)
      }
      
      
      getDesigns();
      
      return;
    }, [])
  
    const algo = (arr) => {
      for (var i = 0; i < arr.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (arr.length - i));
  
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
    }
    return (
      <Div>
        <Title>Leaderboard!!</Title>
        <DesignContainer designs={designs} />
      </Div>
    )
  }
  
  const Div = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
  `
  const Title = styled.h1`
    font-size: 50px;
    margin: 50px;
  
  
  `
  
  export default Leaderboard