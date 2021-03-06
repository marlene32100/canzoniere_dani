import * as React from "react";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../../app.scss";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer
      className="footer-down text-center text-white"
      style={{ width: `100%` }}
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
        Made with &#10084;&#65039; by <br />
        <a className="text-white" href="https://blueblissstudio.com/">
          Katia De Bon - Blue Bliss <br />
          2022 - &#169; all rigths reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
