import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import "reset-css";
import "../root.scss";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const HomeWrapper = styled.main``;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityColor {
        nodes {
          title
          id
          code
          _rawBody
        }
      }
    }
  `);
  const [colors] = useState(data.allSanityColor.nodes);
  const [pulse] = useState(false);
  const [currentColor] = useState(data.allSanityColor.nodes[1]);

  return (
    <>
      <Header />
      <Layout color={currentColor.code}>
        <Footer
          color={{ title: currentColor.title, body: currentColor._rawBody }}
        />
      </Layout>
    </>
  );
};

export default IndexPage;
