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
      <Layout
        title={doc.banner_title.text}
        description={doc.banner_description.text}
        linkUrl="/song"
        linkLabel={doc.banner_link_label.text}
        home="/"
      />
      <Intro lastCdUrl={doc.last_cd.url} lastCdAlt={doc.last_cd.alt} />
    </div>
  );
};

export const query = graphql`
  query HomeTemplate {
    prismicHomepage {
      data {
        banner_title {
          text
        }
        banner_description {
          text
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          text
        }
        last_cd {
          url
          alt
        }
      }
    }
  }
`;

export default HomeTemplate;
