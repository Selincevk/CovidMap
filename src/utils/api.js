import axios from "axios";

// covid-19-statistics API (1. API)
const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_COVID_API1_HOST
  }
});

// covid-19 API (2. API)
const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_COVID_API2_HOST
  }
});
const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export { totalApi, detailApi, countryApi };
