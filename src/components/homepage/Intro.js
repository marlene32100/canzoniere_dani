// intro.js file

import * as React from "react";

import { PrismicLink } from "@prismicio/react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

import Marquee from "react-easy-marquee";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../app.scss";
import "./homepageintro.scss";
import Footer from "../footer/Footer";
import "../footer/footer.scss";

import guitar from "../../images/guitar.jpg";

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
          <Container>
            <Row className="row-container">
              <Col sm={12} md={6} className="right column-intro">
                <a
                  href="shopify.com"
                  target="_blank"
                  className="buy-button-text"
                >
                  <h2
                    className="title-col"
                    onMouseOver={makeGreen}
                    onMouseOut={makeBlack}
                  >
                    Non perdere l'ultimo CD
                  </h2>
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
                            href="shopify.com"
                            target="_blank"
                            className="buy-button-text"
                          >
                            <ShoppingCartIcon className="shopping-icon" />
                            Acquista ora
                          </a>
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
              <Col sm={12} md={6} className="left column-intro">
                <PrismicLink href="/lyrics" className="">
                  <h2 className="title-col">Tutti i testi delle canzoni</h2>
                  <div className="left-picture-container">
                    <picture className="left-picture">
                      <img
                        className="left-picture-image"
                        src={guitar}
                        alt="guitar on grey background"
                      />
                    </picture>
                  </div>
                </PrismicLink>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Intro;
