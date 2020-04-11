import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";

const InfoWrapper = styled.section`
  display: flex;
  margin-top: 100px;
  padding: 20px;
`;

const InfoColumn = styled.aside`
  padding: 0 20px;
  width: 100%;

  a {
    color: inherit;
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
  return (
    <>
      <SEO title="// INFORMATION" description="" />
      <Header infoPage={true} />
      <Layout>
        <InfoWrapper>
          <InfoColumn>
            <h2>Luz Mística is a light + color therapy application.</h2>
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
    </>
  );
};

export default Information;
