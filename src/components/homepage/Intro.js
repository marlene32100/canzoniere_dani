// intro.js file

import * as React from "react";

import { PrismicLink } from "@prismicio/react";

import "bootstrap/dist/css/bootstrap.min.css";

import Marquee from "react-easy-marquee";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

import "../../app.scss";
import "./homepageintro.scss";

export const Intro = ({ lastCdUrl, lastCdAlt, smallCdUrl, mediumCdUrl }) => {
  function makeGreen(e) {
    e.target.style.color = "#009665";
  }
  function makeBlack(e) {
    e.target.style.color = "#2c2c2c";
  }
  return (
    <div>
      <main>
        <section>
          <div className="row-container">
            <div className="column-intro">
              <h2
                className="title-col"
                onMouseOver={makeGreen}
                onFocus={makeGreen}
                onMouseOut={makeBlack}
                onBlur={makeBlack}
              >
                "Spirito Soffia in Me" <br />
                <span>il primo album di Daniele Bonaiuto</span>
              </h2>
              <PrismicLink href="/lyrics" className="link link-to-lyrics">
                <h2
                  className="link-to-lyrics-text"
                  onMouseOver={makeGreen}
                  onFocus={makeGreen}
                  onMouseOut={makeBlack}
                  onBlur={makeBlack}
                >
                  Tutti i testi delle canzoni
                  <QueueMusicIcon className="lyrics-icon" />
                </h2>
              </PrismicLink>

              <div className="picture-container">
                <picture className="cd-picture">
                  <source media="(min-width:1100px)" srcset={smallCdUrl} />
                  <source media="(min-width:680px)" srcset={mediumCdUrl} />
                  <img
                    src={lastCdUrl}
                    alt={lastCdAlt}
                    className="cd-picture-image"
                  />
                </picture>
                <div className="buy">
                  <div className="buy-button" role="button">
                    <Marquee duration={10000}>
                      <a
                        href="https://www.instagram.com/danielebonaiutomusic/"
                        target="_blank"
                        className="buy-button-text"
                      >
                        <ShoppingCartIcon className="shopping-icon" />
                        Acquista qui
                      </a>
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Intro;
