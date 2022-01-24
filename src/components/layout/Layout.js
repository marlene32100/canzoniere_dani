// layout.js file

import * as React from "react";

import { PrismicLink } from "@prismicio/react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../../app.scss";
import "./header.scss";
import "./footer.scss";

const Layout = ({ title, description, linkUrl, linkLabel, home }) => {
  return (
    <div>
      <header className="homepage-banner navbar">
        <div className="banner-content container">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-description">{description}</p>
          <div className="link-area">
            <PrismicLink href={linkUrl} className="banner-button">
              {linkLabel}
            </PrismicLink>
            <PrismicLink href={home} className="banner-button">
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
