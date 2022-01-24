// song.js file

import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout.js";
import "../app.scss";

const Song = ({ data }) => {
  if (!data) return null;
  const doc = [data.allPrismicSong.edges];
  const homeDoc = data.prismicHomepage.data;

  return (
    <div>
      <Layout
        title={homeDoc.banner_title.text}
        description={homeDoc.banner_description.text}
        linkUrl="/song"
        linkLabel={homeDoc.banner_link_label.text}
        home="/"
      />
      <h1>Test</h1>
      <p>Those are the results: </p>
      <div>
        {doc.map((song, index) => (
          <ul key={index}>
            {song.map((item, i) => (
              <div key={i}>
                <li>{item.node.data.title.text}</li>
                <li>{item.node.data.lyrics}</li>
              </div>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query Song {
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
        last_cd {
          url
          alt
        }
      }
    }
    allPrismicSong {
      edges {
        node {
          id
          data {
            lyrics
            title {
              text
            }
          }
        }
      }
    }
  }
`;

export default Song;
