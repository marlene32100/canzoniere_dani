// index.js file

import * as React from "react";
import { graphql } from "gatsby";

import "../app.scss";
import Layout from "../components/layout/Layout.js";
import Intro from "../components/homepage/Intro.js";

const HomeTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicHomepage.data;

  return (
    <div>
      <Layout />
      <Intro lastCdUrl={doc.last_cd.url} lastCdAlt={doc.last_cd.alt} />
    </div>
  );
};

export const query = graphql`
  query HomeTemplate {
    prismicHomepage {
      data {
        last_cd {
          url
          alt
        }
      }
    }
  }
`;

export default HomeTemplate;
