const { backendApi, api } = require("../../../../conf");

export const sendDataContact = (form) => {
  return api
    .post(`${backendApi}/contact`, form)
    .then(({ data }) => {
      console.log("Contact was created");
    })
    .catch((err) => {
      console.warn("Something went poorly");
    });
};
