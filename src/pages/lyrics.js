// index.js file

import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const Lyrics = ({ data }) => {
  const doc = data.allPrismicLyrics.edges.slice(0, 1).pop();
  if (!doc) return null;
  const title = doc.node.data.title;
  const slices = [doc.node.data.body];

  return (
    <div>
      <h1>{title.text}</h1>
      <p>Ciao </p>
      <ul>
        {slices.map((song) =>
          song.map((item) => (
            <li>
              <Link to={`/lyrics/${item.primary.song_title.text}`}>
                {item.primary.song_title.text}
              </Link>
            </li>
          ))
        )}
      </ul>
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
