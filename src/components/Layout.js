import React, { useState } from "react";
import styled from "styled-components";

const Layout = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: ${props => (props.color ? props.color : "orange")};
  transition: background-color 5s ease;
`;

const Wrapper = ({ children, color }) => {
  // run graphql queries, useState, etc.
  return (
    <Layout color={color} id={"color"}>
      {children}
    </Layout>
  );
};

export default Wrapper;
