import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Header = ({ infoPage }) => {
  // run graphql queries, setState, useContext, etc.
  return (
    <HeaderWrapper>
      {infoPage ? (
        <React.Fragment>
          <Link to={"/"}>
            <h1>Luz Mística // Mystical Light</h1>
          </Link>
          <p>Information</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Luz Mística // Mystical Light</h1>
          <Link to={"/information"}>Information</Link>
        </React.Fragment>
      )}
    </HeaderWrapper>
  );
};

export default Header;
