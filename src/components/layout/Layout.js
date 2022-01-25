// layout.js file

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { PrismicLink } from "@prismicio/react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../../app.scss";
import "./header.scss";
import "./footer.scss";

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
        <div className="banner-content container">
          <h2 className="banner-title">{doc.banner_title.text}</h2>
          <p className="banner-description">{doc.banner_description.text}</p>
          <div className="link-area">
            <PrismicLink href="/lyrics" className="banner-button">
              {doc.banner_link_label.text}
            </PrismicLink>
            <PrismicLink href="/" className="banner-button">
              Home
            </PrismicLink>
          </div>
        </div>
      </header>

      <footer
        className=" footer text-center text-white"
        style={{ position: `fixed`, bottom: 0, left: 0, width: `100%` }}
      >
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FacebookRoundedIcon />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <LanguageRoundedIcon />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <InstagramIcon />
          </a>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Made with &#10084;&#65039; by
          <a className="text-white" href="https://blueblissstudio.com/">
            Blue Bliss
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
