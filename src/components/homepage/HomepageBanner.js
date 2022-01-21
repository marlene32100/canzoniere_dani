// HomepageBanner.js file

import * as React from "react";
import { PrismicLink } from "@prismicio/react";
import "./homepage.scss";

export const HomepageBanner = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundUrl,
}) => (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.4)), url(${backgroundUrl})`,
    }}
  >
    <div className="banner-content container">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-description">{description}</p>
      <PrismicLink href={linkUrl} className="banner-button">
        {linkLabel}
      </PrismicLink>
    </div>
  </section>
);
