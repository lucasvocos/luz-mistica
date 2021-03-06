import React, { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { Link } from "gatsby";
import Arrow from "../images/arrow.svg";

const FooterWrapper = styled.footer`
  position: fixed;
  left: 20px;
  bottom: 20px;
  right: 20px;

  .color-info {
    width: 50%;

    @media (min-width: 1024px) {
      max-width: 55ch;
      width: 100%;
    }
  }

  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

const FullScreenButton = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  background-color: transparent;
  font-size: 1em;
  border: 1px solid black;
  text-transform: uppercase;
  font-family: "SuisseIntlRegular", "Helvetica Neue", Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 50px;

  &.off {
  }
  &.on {
    background: black;
    color: white;
  }

  &:focus {
    outline: 1px solid transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-height: 1.5rem;
    height: 1.5rem;
    vertical-align: bottom;
    width: auto;
    display: inline;
  }
`;

const Footer = ({ color }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);

  const enterFullScreen = () => {
    setFullScreen(true);
    const wrapper = document.getElementById("___gatsby");

    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullScreen) {
      wrapper.webkitRequestFullScreen();
    } else if (wrapper.mozRequestFullScreen) {
      wrapper.mozRequestFullScreen();
    }
  };

  const exitFullScreen = () => {
    setFullScreen(false);

    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    iOS ? setDisplayButton(false) : setDisplayButton(true);
  }, []);

  return (
    <FooterWrapper>
      {color.title && <h2>{color.title}</h2>}
      {color.body && (
        <div className="color-info">
          <BlockContent blocks={color.body} />
        </div>
      )}

      {displayButton ? (
        <React.Fragment>
          {fullScreen ? (
            <FullScreenButton className="on" onClick={() => exitFullScreen()}>
              {" "}
              Fullscreen On
            </FullScreenButton>
          ) : (
            <FullScreenButton className="off" onClick={() => enterFullScreen()}>
              {" "}
              Fullscreen Off
            </FullScreenButton>
          )}
        </React.Fragment>
      ) : (
        <FullScreenButton>
          <Link to={"/information"}>
            INSTALL <img src={Arrow} alt="arrow" />
          </Link>
        </FullScreenButton>
      )}
    </FooterWrapper>
  );
};

export default Footer;
