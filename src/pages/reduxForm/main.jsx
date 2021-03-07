import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form/immutable";
import InputField from "./components/input";
import RadioField from "./components/radio";
import TextField from "./components/text";
import validate from "./validate";
import listFormErrors from "./helpers";
import emailJs from "./submit";

const renderInputComponent = ({ input: { name, onChange, value } }) => {
  let text;
  let fieldName;

  switch (name) {
    case "nom":
      text = "Nom:";
      fieldName = "nom";
      break;
    case "prénom":
      text = "Prénom:";
      fieldName = "prénom";
      break;
    case "age":
      text = "Age:";
      fieldName = "age";
      break;
    case "mail":
      text = "Mail:";
      fieldName = "mail";
      break;
    case "prestation":
      text = "Prestation:";
      fieldName = "prestation";
      break;
    default:
      text = "";
      fieldName = "";
  }

  return (
    <InputField
      value={value}
      onChange={onChange}
      text={text}
      fieldName={fieldName}
    />
  );
};

let SampleForm = ({ handleSubmit, errors, formHasErrors }) => (
  <form onSubmit={handleSubmit(emailJs)}>
    <div className="register-form">
      <Field name="nom" type="text" component={renderInputComponent} />
      <Field name="prénom" type="text" component={renderInputComponent} />
      <Field name="age" type="number" component={renderInputComponent} />
      <Field name="mail" type="email" component={renderInputComponent} />
      <Field name="prestation" type="text" component={renderInputComponent} />
      <Field
        name="isDeveloper"
        component={({ input: { onChange, value } }) => (
          <RadioField
            id="isDeveloper"
            textOne="Developer"
            textTwo="Non-Developer"
            valueOne="developer"
            valueTwo="non-developer"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Field
        name="textArea"
        type="text"
        component={({ input: { onChange, value } }) => (
          <TextField
            value={value}
            onChange={onChange}
            text="Commentaires"
            fieldName="commentaires"
          />
        )}
      />
      <button type="submit">Submit</button>
      {formHasErrors && (
        <div className="register-form__form-errors">
          {listFormErrors(errors)}
        </div>
      )}
    </div>
  </form>
);

SampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    nom: PropTypes.string,
    prénom: PropTypes.string,
    age: PropTypes.number,
    mail: PropTypes.string,
    prestation: PropTypes.string,
    isDeveloper: PropTypes.string,
    textArea: PropTypes.string,
  }),
};

export default SampleForm;
