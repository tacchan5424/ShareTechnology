import axiosBase from "axios";

export default ({}, inject) => {
  const axios = axiosBase.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://hogefuga.herokuapp.com/"
        : "http://localhost:3000", // バックエンドB のURL:port を指定する
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-Custom-Auth": process.env.CUSTOM_HEADER
    },
    responseType: "json"
  });

  inject("Axios", axios);
};
