import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import Context from "../context/Context";
import styled from "styled-components";

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

  const [colors] = useState(data.allSanitySiteSettings.nodes[0].colorOrder);
  const [interval] = useState(false);
  const [currentColor, setCurrentColor] = useState(
    data.allSanitySiteSettings.nodes[0].colorOrder[0]
  );

  const colorInterval = () => {
    let index = colors.indexOf(currentColor);

    if (index === colors.length - 1) {
      index = 0;
    }

    setCurrentColor(colors[index + 1]);
  };

  const nextColor = () => {
    let currentIndex = colors.indexOf(currentColor);

    if (currentIndex + 1 > colors.length - 1) {
      currentIndex = -1;
    }

    setCurrentColor(colors[currentIndex + 1]);
  };

  const prevColor = () => {
    let index = colors.indexOf(currentColor);

    if (index - 1 < 0) {
      index = colors.length;
    }

    setCurrentColor(colors[index - 1]);
  };

  useEffect(() => {
    // if (data) {
    //   context.initSetState(
    //     data.allSanitySiteSettings.nodes[0].colorOrder,
    //     data.allSanitySiteSettings.nodes[0].colorOrder[0]
    //   );
    // }
    if (interval) {
      setInterval(colorInterval, 5000);
    } else {
      clearInterval(colorInterval);
    }
  }, [currentColor]);

  return (
    <LayoutStyle color={currentColor.code} id={"color"}>
      <Header home={props.home} />
      {props.children}
      {props.home && (
        <>
          <LeftButton onClick={prevColor}>Previous </LeftButton>
          <RightButton onClick={nextColor}>Next </RightButton>

          <Footer
            color={{ title: currentColor.title, body: currentColor._rawBody }}
          />
        </>
      )}
    </LayoutStyle>
  );
};

export default Wrapper;
