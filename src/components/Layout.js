import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import Context from "../context/Context";
import styled from "styled-components";
import "../root.scss";

const LayoutStyle = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: background-color 2.5s ease;
  background-color: ${props => (props.color ? props.color : "")};
`;

const Button = styled.button`
  padding: 0;
  text-transform: uppercase;
  position: fixed;
  top: 49%;
  background: transparent;
  border: 0;
  font-size: 1em;
  cursor: pointer;

  &:focus {
    outline: 1px solid transparent;
  }
`;

const LeftButton = styled(Button)`
  left: 20px;
`;
const RightButton = styled(Button)`
  right: 20px;
`;

const Wrapper = props => {
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        nodes {
          colorOrder {
            title
            id
            code
            _rawBody
          }
        }
      }
    }
  `);

  const context = useContext(Context);

  const nextColor = () => {
    let currentIndex = context.colors.indexOf(context.currentColor);

    if (currentIndex + 1 > context.colors.length - 1) {
      currentIndex = -1;
    }

    context.setCurrentColor(currentIndex + 1);
  };

  const prevColor = () => {
    let index = context.colors.indexOf(context.currentColor);

    if (index - 1 < 0) {
      index = context.colors.length;
    }

    context.setCurrentColor(index - 1);
  };

  const colorInterval = () => {
    setInterval(nextColor);
  };

  useEffect(() => {
    if (context.colors.length === 0) {
      context.initSetState(
        data.allSanitySiteSettings.nodes[0].colorOrder,
        data.allSanitySiteSettings.nodes[0].colorOrder[0]
      );
    }
    if (context.interval) {
      setInterval(nextColor, 5000);
    } else {
      clearInterval(colorInterval);
    }
  }, []);

  return (
    <LayoutStyle color={context.currentColor.code} id={"color"}>
      <Header home={props.home} />
      {props.children}
      {props.home && (
        <>
          <LeftButton onClick={prevColor}>Previous </LeftButton>
          <RightButton onClick={nextColor}>Next </RightButton>

          <Footer
            color={{
              title: context.currentColor.title,
              body: context.currentColor._rawBody
            }}
          />
        </>
      )}
    </LayoutStyle>
  );
};

export default Wrapper;
