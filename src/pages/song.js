// song.js file

import * as React from "react";
import { graphql } from "gatsby";
import "../app.scss";

const Song = ({ data }) => {
  if (!data) return null;
  const doc = [data.allPrismicSong.edges];

  return (
    <div>
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
