import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import DesignContainer from '../components/DesignsContainer'

const Dashboard = () => {

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

        const n_designs = designs.slice(0, 3)
    
        setDesigns(n_designs);
        console.log(n_designs)
    }
    
    
    getDesigns();
    
    return;
  }, [])

  return (
    <Div>
      <Title>VOTE ON THESE DESIGNS</Title>
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

export default Dashboard