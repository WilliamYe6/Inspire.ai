import '../../src/App.css';

import {React, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from '../components/Header';



function App() {

  const [design, setDesign] = useState({})
  return (
    <>
      <Header />
      <Outlet design={design} setDesign={setDesign} />
    </>
   
  );
}

export default App;
