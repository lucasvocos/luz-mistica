import React from "react";
import { Link } from "gatsby";
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

const Header = ({ home }) => {
  return (
    <HeaderWrapper>
      {home ? (
        <React.Fragment>
          <h1>Luz Mística // Mystic Light</h1>
          <Link to={"/information"}>Information</Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to={"/"}>
            <h1>Luz Mística // Mystic Light</h1>
          </Link>
          <p>Information</p>
        </React.Fragment>
      )}
    </HeaderWrapper>
  );
};

export default Header;
