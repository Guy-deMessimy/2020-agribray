import { SubmissionError } from "redux-form/immutable";
const R = require("ramda");

const validate = (values) => {
  const stringPattern = /^[A-Za-z]+$/;
  const numberPattern = /^[0-9]+$/;
  const mailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
  const errors = {};
  const name = values.get("nom");
  const surname = values.get("prénom");
  const age = values.get("age");
  const mail = values.get("mail");
  const prestation = values.get("prestation");
  const isDeveloper = values.get("isDeveloper");
  const textArea = values.get("textArea");

  if (R.isNil(name)) {
    errors.name = 'field "Name" can\'t be empty';
  } else if (!stringPattern.test(name)) {
    errors.name = 'field "Name" can have letters only';
  }

  if (R.isNil(surname)) {
    errors.surname = 'field "Surname" can\'t be empty';
  } else if (!stringPattern.test(surname)) {
    errors.surname = 'field "Surname" can have letters only';
  }

  if (R.isNil(age)) {
    errors.age = 'field "Age" can\'t be empty';
  } else if (!numberPattern.test(age)) {
    errors.age = 'field "Age" can have numbers only';
  }

  if (R.isNil(mail)) {
    errors.mail = 'field "Mail" can\'t be empty';
  } else if (!mailPattern.test(mail)) {
    errors.mail = 'field "Mail" can have letter and numbers only';
  }

  if (R.isNil(prestation)) {
    errors.prestation = 'field "Prestation" can\'t be empty';
  } else if (!stringPattern.test(prestation)) {
    errors.prestation = 'field "Prestation" can have letters only';
  }

  if (R.isNil(isDeveloper)) {
    errors.isDeveloper = 'field "Are you a developer" needs an answer';
  }

  if (R.isNil(textArea)) {
    errors.textArea = 'field "Commentaires" can\'t be empty';
  } else if (!stringPattern.test(textArea)) {
    errors.textArea = 'field "Commentaires" can have letters only';
  }
  if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
  }

  return values;
};

export default validate;
