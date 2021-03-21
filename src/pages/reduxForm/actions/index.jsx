import * as formConst from "../actions/const";
import validate from "../utils/validate";
import * as emailjs from "emailjs-com";
import { sendDataContact } from "../api";
require("dotenv").config();

export const formSubmitSucceededAction = (value) => ({
  type: formConst.FORM_SUBMIT_SUCCEEDED,
});

export const formSubmitFailedAction = (value) => ({
  type: formConst.FORM_SUBMIT_FAILED,
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function emailJs(values) {
  return sleep(1000).then(() => {
    validate(values);
    const nom = values.get("nom");
    const mail = values.get("mail");
    const prestation = values.get("prestation");
    sendDataContact(values)
    const {
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      REACT_APP_USER_ID,
    } = process.env;

    const templateParams = {
      from_name: nom,
      from_email: mail,
      to_name: "Agribray",
      subject: prestation,
    };
    emailjs
      .send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Votre message a bien été envoyé");
        },
        (error) => {
          console.log(error.text);
          window.alert("Veuillez recommencer");
        }
      );
  });
}

export default emailJs;
