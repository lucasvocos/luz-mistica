import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";

const NotFound = styled.main``;

const NotFoundPage = () => (
  <NotFound>
    <SEO title="404: Not found" />
    <div
      style={{
        textAlign: "center",
        fontWeight: "normal"
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>Not Found</h1>
      <p>
        Click{" "}
        <Link to={"/"} style={{ color: "inherit" }}>
          here
        </Link>{" "}
        to go home
      </p>
    </div>
  </NotFound>
);

export default NotFoundPage;
