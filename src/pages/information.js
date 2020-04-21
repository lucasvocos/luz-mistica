import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";
import ShareIcon from "../images/share-apple.svg";

const InfoWrapper = styled.section`
  display: flex;
  margin-top: 100px;
  padding: 20px;
`;

const InfoColumn = styled.aside`
  width: 100%;
  line-height: 1.25;

  padding-right: 20px;

  a {
    color: inherit;
  }

  h2,
  p {
    margin-bottom: 0.5em;
    max-width: 50ch;
  }

  ul {
    line-height: 1.25;

    li {
      max-width: 37ch;
      margin-bottom: 0.5em;
    }

    a {
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 25%;
    padding: 0;
    &:first-of-type {
      padding-right: 20px;
    }
  }
`;

const Instructions = styled.aside`
  h3 {
    margin-top: 1rem;
  }
  img {
    max-height: 2rem;
    display: inline;
    width: auto;
    height: 1.5rem;
    vertical-align: bottom;
  }
`;

const Information = () => {
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        nodes {
          _rawInformation
        }
      }
    }
  `);

  const [displayInstallation, setDisplayInstallation] = useState(false);

  useEffect(() => {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    iOS ? setDisplayInstallation(true) : setDisplayInstallation(false);
    return () => {};
  }, []);

  return (
    <Layout home={false}>
      <SEO
        title="LUZ MÍSTICA"
        description="Luz Mística is a color + light therapy application. Turn the lights off, increase the screen brightness, and bathe in color. Designed & Developed by Lucas Vocos"
      />
      <InfoWrapper>
        <InfoColumn>
          <h2>Luz Mística is a light + color therapy application.</h2>
          <p>
            Turn the lights off, increase your screen brightness, and bathe in
            the comfort of color.
          </p>

          {displayInstallation && (
            <Instructions>
              <h3>INSTALLATION INSTRUCTIONS:</h3>
              <p>
                Tap the Share icon: <img src={ShareIcon} alt="share icon" /> and
                click "Add to Home Screen".
              </p>
            </Instructions>
          )}
        </InfoColumn>
        <InfoColumn>
          <ul>
            <p>COLOPHON:</p>
            <li>
              Designed & Developed by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lucasvocos.com"
              >
                Lucas Vocos
              </a>
            </li>
            <li>
              Typface: Suisse International graciously donated by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://swisstypefaces.com/"
              >
                Swiss Typefaces
              </a>
            </li>
            <li>
              {data.allSanitySiteSettings.nodes[0]._rawInformation && (
                <BlockContent
                  blocks={data.allSanitySiteSettings.nodes[0]._rawInformation}
                />
              )}
            </li>
          </ul>
        </InfoColumn>
      </InfoWrapper>
    </Layout>
  );
};

export default Information;
