import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import "reset-css";
import Layout from "../components/Layout";
import styled from "styled-components";

const HomeWrapper = styled.main``;

const IndexPage = () => {
  return (
    <Layout home={true}>
      <SEO
        title=" "
        description="Luz Mística is a color + light therapy application. Turn the lights off, increase the screen brightness, and bathe in color. Designed & Developed by Lucas Vocos"
      />
    </Layout>
  );
};

export default IndexPage;
