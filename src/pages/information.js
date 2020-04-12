import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import BlockContent from "@sanity/block-content-to-react";

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
    margin-top: 1em;
    line-height: 1.25;

    p {
      margin-bottom: 0.5em;
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

  return (
    <Layout home={false}>
      <SEO
        title="// INFORMATION"
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
