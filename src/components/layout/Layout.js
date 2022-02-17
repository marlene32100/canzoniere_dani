// layout.js file

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { PrismicLink } from "@prismicio/react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";

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

      <footer
        className=" footer text-center text-white"
        style={{ position: `fixed`, bottom: 0, left: 0, width: `100%` }}
      >
        <section className="footer-icons">
          <a
            className="btn btn-outline-light btn-floating m-1 footer-icons-icon"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <FacebookRoundedIcon />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1 footer-icons-icon"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <LanguageRoundedIcon />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1 footer-icons-icon"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
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
