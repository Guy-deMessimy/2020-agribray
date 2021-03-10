import validate from "./validate";
import { init } from "emailjs-com";
import * as emailjs from "emailjs-com";
init("user_Thhn4IaRT3llceNo0OZ6m");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function emailJs(values) {
  return sleep(1000).then(() => {
    validate(values);
    // simulate server latency
    const test = JSON.stringify(values, null, 2);
    const retest = JSON.parse(test);
    const { nom, mail, prestation } = retest;
    console.log(mail);
    console.log(test);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    const templateParams = {
      from_name: nom,
      from_email: mail,
      to_name: "Agribray",
      subject: prestation,
    };
    emailjs
      .send(
        "service_2etpuqa",
        "template_v0o2cnd",
        templateParams,
        "user_Thhn4IaRT3llceNo0OZ6m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  });
}

export default emailJs;
