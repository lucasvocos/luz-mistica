import React, { useEffect } from "react";
import SEO from "../components/seo";
import "reset-css";
import Layout from "../components/Layout";

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
