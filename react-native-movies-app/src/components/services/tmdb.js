import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "d4606750b3b8eff8cd6edc457f8ed389",
  },
});
