require("dotenv").config();

module.exports = {
  modules: [
    // 省略
    // NODE_ENVに応じた.envファイルを取得します。
    ["@nuxtjs/dotenv"],
    [
      "@nuxtjs/google-gtag",
      {
        id: "G-HTGPFZN1NF",
        debug: false
      }
    ]
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: "ほげふが",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "ほげふがは、初心者がIT系技術学習の際の導入に良いサイトをまとめています。登録なしに誰でも閲覧・更新ができます。"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "ほげふが,初心者,ほげ,ふが,hoge,fuga"
      },
      { hid: "og:site_name", property: "og:site_name", content: "ほげふが" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://hogefuga.herokuapp.com/"
      },
      { hid: "og:title", property: "og:title", content: "ほげふが" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "ほげふがは、初心者がIT系技術学習の際の導入に良いサイトをまとめています。登録なしに誰でも閲覧・更新ができます。"
      },
      { hid: "og:image", property: "og:image", content: "/favicon.ico" },
      {
        name: "google-site-verification",
        content: "GSinGdcgwZpERuFK9z7LjAxKKwhVrZV20daf7yjczb8"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [
    "~/plugins/buefy.js",
    "~/plugins/axios.js",
    "~/plugins/axiosGoogle.js"
  ],
  telemetry: false
};
