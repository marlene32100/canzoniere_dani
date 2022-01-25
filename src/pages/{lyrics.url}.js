// {PrismicPage.url}.js file

import * as React from "react";
import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";

import { Layout } from "../components/layout/Layout";

const LyricsTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.allPrismicLyrics.edges.slice(0, 1).pop();

  return (
    <div>
      <Layout />
      <SliceZone slices={doc.body} />
    </div>
  );
};

export const query = graphql`
  query LyricsTemplate {
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

export default LyricsTemplate;
