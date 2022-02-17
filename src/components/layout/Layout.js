// layout.js file

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { PrismicLink } from "@prismicio/react";

import HomeIcon from "@mui/icons-material/Home";

import "../../app.scss";
import "./header.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Layout {
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
        }
      }
    }
  `);
  if (!data) return null;
  const doc = data.prismicHomepage.data;

  return (
    <div>
      <header className="homepage-banner navbar">
        <div className="banner-content">
          <div className="banner-content-title">
            <h2 className="banner-title">{doc.banner_title.text}</h2>
          </div>

          <div className="link-area">
            <PrismicLink
              href="/lyrics"
              className="banner-button banner-button-first"
            >
              <div className="banner-button-link">
                {doc.banner_link_label.text}
              </div>
            </PrismicLink>
            <PrismicLink href="/" className="banner-button">
              <div className="banner-button-link">
                <HomeIcon className="banner-button-link-icon" />
              </div>
            </PrismicLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Layout;
