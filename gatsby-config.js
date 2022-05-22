require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `canzoniere_dani`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `tutte i testi delle canzoni di Daniele Bonaiuto Music`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: `danielebonaiuto`,
        accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`,
        linkResolver: require("./src/linkResolver.js").linkResolver,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          song: require("./src/schemas/song.json"),
          album: require("./src/schemas/album.json"),
          lyrics: require("./src/schemas/lyrics.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `Cardo\:400,400i,700`,
          `Josefin Sans\:100,200,300,400,500,600,700`,
          `Roboto\:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: `danielebonaiuto`,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
