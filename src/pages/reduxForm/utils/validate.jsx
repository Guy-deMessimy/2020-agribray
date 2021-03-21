import { SubmissionError } from "redux-form/immutable";
const R = require("ramda");

const validate = (values) => {
  const stringPattern = /^[a-zA-Z0-9 ]+$/;
  const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phonePattern = /^((\+|00)33\s?|0)[1234567](\s?\d{2}){4}$/;
  const postcodePattern = /^(?:[0-8]\d|9[0-8])\d{3}$/;
  const errors = {};
  const surname = values.get("prenom");
  const name = values.get("nom");
  const mail = values.get("mail");
  const telephone = values.get("tel");
  const societe = values.get("societe");
  const cp = values.get("cp");
  const ville = values.get("ville");
  const prestation = values.get("prestation");
  const textArea = values.get("commentaire");

  if (R.isNil(surname)) {
    errors.surname = 'field "Surname" can\'t be empty';
  } else if (!stringPattern.test(surname)) {
    errors.surname = 'field "Surname" can have letters only';
  } else if (surname.length > 25) {
    errors.surname = 'field "Surname" can have 15 characters or less';
  }

  if (R.isNil(name)) {
    errors.name = 'field "Name" can\'t be empty';
  } else if (!stringPattern.test(name)) {
    errors.name = 'field "Name" can have letters only';
  } else if (name.length > 25) {
    errors.name = 'field "Name" can have 25 characters or less';
  }

  if (R.isNil(mail)) {
    errors.mail = 'field "Mail" can\'t be empty';
  } else if (!mailPattern.test(mail)) {
    errors.mail = 'field "Mail" can have email format only';
  }

  if (R.isNil(telephone)) {
    errors.telephone = 'field "Téléphone" can\'t be empty';
  } else if (!phonePattern.test(telephone)) {
    errors.telephone = 'field "Téléphone" can have 10 numbers only';
  }

  if (R.isNil(societe)) {
    errors.societe = 'field "Société" can\'t be empty';
  } else if (!stringPattern.test(societe)) {
    errors.societe = 'field "Société" can have letters only';
  } else if (name.length > 25) {
    errors.societe = 'field "Société" can have 25 characters or less';
  }

  if (R.isNil(cp)) {
    errors.cp = 'field "Code Postal" can\'t be empty';
  } else if (!postcodePattern.test(cp)) {
    errors.cp = 'field "Code postal" can have French postcode only';
  }

  if (R.isNil(ville)) {
    errors.ville = 'field "Ville" can\'t be empty';
  } else if (!stringPattern.test(ville)) {
    errors.ville = 'field "Ville" can have letters only';
  } else if (ville.length > 25) {
    errors.ville = 'field "Ville" can have 25 characters or less';
  }

  if (R.isNil(prestation)) {
    errors.prestation = 'field "Prestation" can\'t be empty';
  } else if (!stringPattern.test(prestation)) {
    errors.prestation = 'field "Prestation" can have letters only';
  } else if (prestation.length > 64) {
    errors.prestation = 'field "Prestation" can have 64 characters or less';
  }

  if (R.isNil(textArea)) {
    errors.textArea = 'field "Commentaires" can\'t be empty';
  } else if (!stringPattern.test(textArea)) {
    errors.textArea = 'field "Commentaires" can have letters only';
  } else if (ville.length > 128) {
    errors.textArea = 'field "Commentaires" can have 128 characters or less';
  }

  if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
  }

  return values;
};

export default validate;
