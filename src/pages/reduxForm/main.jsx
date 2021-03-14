import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form/immutable";
import InputField from "./components/input";
import TextField from "./components/text";
import listFormErrors from "./utils/helpers";
import emailJs from "./submit";
import { RegisterForm, RegisterFormErrors } from "./style";

const renderInputComponent = ({ input: { name, onChange, value } }) => {
  let text;
  let fieldName;

  switch (name) {
    case "prénom":
      text = "Prénom *";
      fieldName = "prénom";
      break;
    case "nom":
      text = "Nom *";
      fieldName = "nom";
      break;
    case "mail":
      text = "Mail *";
      fieldName = "mail";
      break;
    case "téléphone":
      text = "Téléphone *";
      fieldName = "téléphone";
      break;
    case "société":
      text = "Sociéte *";
      fieldName = "société";
      break;
    case "code postal":
      text = "Code postal *";
      fieldName = "code postal";
      break;
    case "ville":
      text = "Ville *";
      fieldName = "Ville";
      break;
    case "prestation":
      text = "Type de prestation *";
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
  <div>
    <h1>Nous contacter</h1>
    <p>
      Compléter votre demande ci-dessous et ajoutez vos coordonnées afin que
      notre équipe vous contacte au plus vite !
    </p>
    <form onSubmit={handleSubmit(emailJs)}>
      <RegisterForm>
        <Field name="prénom" type="text" component={renderInputComponent} />
        <Field name="nom" type="text" component={renderInputComponent} />
        <Field name="mail" type="email" component={renderInputComponent} />
        <Field name="téléphone" type="text" component={renderInputComponent} />
        <Field name="société" type="text" component={renderInputComponent} />
        <Field
          name="code postal"
          type="text"
          component={renderInputComponent}
        />
        <Field name="ville" type="number" component={renderInputComponent} />
        <Field name="prestation" type="text" component={renderInputComponent} />
        <Field
          name="textArea"
          type="text"
          component={({ input: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              text="Commentaires *"
              fieldName="commentaires"
            />
          )}
        />
        <p>
          En cliquant sur "nous contacter", vous souhaitez être recontacté par
          Agribray, et vous acceptez avoir lu et accepté notre politique de
          confidentialité&nbsp;
        </p>
        <button type="submit">Nous contacter</button>
        {formHasErrors && (
          <RegisterFormErrors>{listFormErrors(errors)}</RegisterFormErrors>
        )}
      </RegisterForm>
    </form>
  </div>
);

SampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    prénom: PropTypes.string,
    nom: PropTypes.string,
    mail: PropTypes.string,
    téléphone: PropTypes.number,
    société: PropTypes.string,
    codepostal: PropTypes.number,
    ville: PropTypes.string,
    prestation: PropTypes.string,
    textArea: PropTypes.string,
  }),
};

export default SampleForm;
