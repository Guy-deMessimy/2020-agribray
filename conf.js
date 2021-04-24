import axios from "axios";
require("dotenv").config();

const backendApi = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { backendApi, api };