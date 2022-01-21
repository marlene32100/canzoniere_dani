// index.js file

import * as React from "react";
import { graphql } from "gatsby";
import "../app.scss";
import { HomepageBanner } from "../components/homepage/HomepageBanner";

const HomeTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicHomepage.data;

  return (
    <HomepageBanner
      title={doc.banner_title.text}
      description={doc.banner_description.text}
      linkUrl={doc.banner_link.url}
      linkLabel={doc.banner_link_label.text}
      backgroundUrl={doc.banner_background.url}
    />
  );
};

export const query = graphql`
  query Homepage {
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
        banner_background {
          url
        }
      }
    }
  }
`;

export default HomeTemplate;
