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
  &:first-of-type {
    padding-right: 20px;
  }

  a {
    color: inherit;
  }

  h2,
  p {
    margin-bottom: 0.5em;
  }

  ul {
    line-height: 1.25;
    p {
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
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
          {data.allSanitySiteSettings.nodes[0]._rawInformation && (
            <BlockContent
              blocks={data.allSanitySiteSettings.nodes[0]._rawInformation}
            />
          )}
          {displayInstallation && (
            <Instructions>
              <h3>INSTALLATION INSTRUCTIONS:</h3>
              <p>
                Tap the Share icon: <img src={ShareIcon} /> and click "Add to
                Home Screen".
              </p>
            </Instructions>
          )}
        </InfoColumn>
        <InfoColumn>
          <p>
            Designed & Developed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lucasvocos.com"
            >
              Lucas Vocos
            </a>
          </p>
          <ul>
            <p>Contact</p>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@lucasvocos.com"
              >
                info@lucasvocos.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/lucasvocos"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/lucasvocos"
              >
                Instagram
              </a>
            </li>
          </ul>
        </InfoColumn>
      </InfoWrapper>
    </Layout>
  );
};

export default Information;
