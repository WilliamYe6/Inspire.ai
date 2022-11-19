import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Div>
      Header
      <Form>Form</Form>
    </Div>
  );
};

const Div = styled.div`
  padding: 1.75em;
  width: 100%;
  background-color: lightblue;
  flex-direction: row;
`;

const Form = styled.div`
  flex-direction: row;
  color: red;
  font-weight: bold;
`;

export default Header;
