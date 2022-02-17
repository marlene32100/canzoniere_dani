// intro.js file

import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../app.scss";
import "./homepageintro.scss";

export const Intro = ({ lastCdUrl, lastCdAlt }) => {
  return (
    <div>
      <main>
        <section>
          <Row>
            <Col sm={12} md={6} className="right">
              <h2 className="title-col">Non perdere l'ultimo CD</h2>
              <div className="picture-container">
                <picture className="cd-picture">
                  <img
                    src={lastCdUrl}
                    alt={lastCdAlt}
                    className="cd-picture-image"
                  ></img>
                </picture>
                <div className="buy-button" role="button">
                  <a
                    href="shopify.com"
                    target="_blank"
                    className="buy-button-text"
                  >
                    <ShoppingCartIcon className="shopping-icon" />
                    Compra
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className="left">
              This is the left one
            </Col>
          </Row>
        </section>
      </main>
    </div>
  );
};

export default Intro;
