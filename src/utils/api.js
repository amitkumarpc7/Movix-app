import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;
const NEW_TOKEN = import.meta.env.VITE_APP_NEW_TOKEN;
console.log("Token",JSON.stringify(NEW_TOKEN));
const headers = {
  Authorization: "bearer " + NEW_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log("api.js-error", err);
    return err;
  }
};
