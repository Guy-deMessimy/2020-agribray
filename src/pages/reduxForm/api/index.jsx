import axios from "axios";
const { backendApi } = require("../../../conf");

export const sendDataContact = (values) => {
  return axios
    .post(`${backendApi}/contact`, values)
    .then(({ data }) => {
      console.log("Contact was created");
    })
    .catch((err) => {
      console.warn("Something went poorly");
    });
};