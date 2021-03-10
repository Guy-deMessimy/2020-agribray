import axios from "axios";


export const sendSurveyAnswers = body => {
    return post(`${__BACKEND_URL__}/api/survey/answers`, body, [400, 403]);
  };
  

  axios
      .post("http://localhost:5050/contact", form)
      .then(({ data }) => {
        console.log("Comic was created");
      })
      .catch((err) => {
        console.warn("Something went poorly");
      });