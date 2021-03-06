import React from "react";
import SEO from "../components/seo";
import "reset-css";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout home={true}>
      <SEO
        title="LUZ MÍSTICA"
        description="Luz Mística is a color + light therapy application. Turn the lights off, increase the screen brightness, and bathe in color. Designed & Developed by Lucas Vocos"
      />
    </Layout>
  );
};

export default IndexPage;
