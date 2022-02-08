import axiosBase from "axios";

export default ({}, inject) => {
  const axios = axiosBase.create({
    baseURL: "https://webrisk.googleapis.com/v1beta1/uris:search", // バックエンドB のURL:port を指定する
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    responseType: "json"
  });

  inject("AxiosGoogle", axios);
};
