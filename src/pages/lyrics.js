// index.js file

import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layout/Layout";
import Footer from "../components/footer/Footer";

import "./lyrics.scss";

const Lyrics = ({ data }) => {
  const doc = data.allPrismicLyrics.edges.slice(0, 1).pop();
  if (!doc) return null;
  const title = doc.node.data.title;
  const slices = [doc.node.data.body];

  return (
    <div>
      <Layout />
      <main>
        <h1 className="lyrics-page-title">{title.text}</h1>
        <div className="lyrics-list">
          <ol>
            {slices.map((song) =>
              song.map((item) => (
                <li className="lyrics-list-song">
                  <p className="lyrics-list-song-title">
                    {item.primary.song_title.text}
                  </p>
                  <p className="lyrics-list-song-text">
                    {item.primary.lyrics.text}
                  </p>
                </li>
              ))
            )}
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Lyrics {
    allPrismicLyrics {
      edges {
        node {
          data {
            body {
              ... on PrismicLyricsDataBodySong {
                id
                primary {
                  lyrics {
                    text
                  }
                  song_title {
                    text
                  }
                  titolo_album {
                    text
                  }
                }
                items {
                  button_label
                  button_link {
                    url
                  }
                }
                slice_label
              }
            }
            title {
              text
              html
            }
          }
        }
      }
    }
  }
`;
export default Lyrics;
