import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate(); 

  const [selectedPage, setSelectedPage] = useState("");

  const toggleRouterButtonStyle = (page) => {
    return (page === selectedPage) ? "red_highlight" : "no_highlight";
  }

  const navigateToForm = () => {
    setSelectedPage("form");
    navigate("/form");
  }

  const navigateToDashboard = () => {
    setSelectedPage("dashboard");
    navigate("/");
  }

  return (
    <Div>
      <FormRedirect className={toggleRouterButtonStyle("form")} onClick={() => {navigateToForm()}}>Form</FormRedirect>
      <DashboardRedirect className={toggleRouterButtonStyle("dashboard")} onClick={() => {navigateToDashboard()}}>Dashboard</DashboardRedirect>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: lightblue;
  width: 100%;
  padding: 1.75em;
`;

const FormRedirect = styled.div`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  &.red_highlight {
    color: red
  }

  &.without_highlight {
    color: black
  }
`;

const DashboardRedirect = styled.div`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  &.red_highlight {
    color: red
  }

  &.without_highlight {
    color: black
  }
`

export default Header;
