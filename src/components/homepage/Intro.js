// intro.js file

import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

import Marquee from "react-easy-marquee";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../app.scss";
import "./homepageintro.scss";

export const Intro = ({ lastCdUrl, lastCdAlt, smallCdUrl, mediumCdUrl }) => {
  return (
    <div>
      <main>
        <section>
          <Container>
            <Row className="row-container">
              <Col sm={12} md={6} className="right column-intro">
                <h2 className="title-col">Non perdere l'ultimo CD</h2>
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
              </Col>
              <Col sm={12} md={6} className="left column-intro">
                <p className="left-column-intro-text">
                  Tutti i testi delle canzoni
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Intro;
