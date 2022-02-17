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
      <Intro
        lastCdUrl={doc.last_cd.url}
        lastCdAlt={doc.last_cd.alt}
        smallCdUrl={doc.image_small.url}
        smallCdAlt={doc.image_small.alt}
        mediumCdUrl={doc.image_medium.url}
        mediumCdAlt={doc.image_medium.alt}
      />
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
        image_small {
          url
          alt
        }
        image_medium {
          url
          alt
        }
      }
    }
  }
`;

export default HomeTemplate;
