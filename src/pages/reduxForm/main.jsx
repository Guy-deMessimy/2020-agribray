import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form/immutable";
import InputField from "./components/input";
import TextField from "./components/text";
import listFormErrors from "./utils/helpers";
import emailJs from "./actions";
import { RegisterForm, RegisterFormErrors } from "./style";

const renderInputComponent = ({ input: { name, onChange, value } }) => {
  let text;
  let fieldName;

  switch (name) {
    case "prenom":
      text = "Prénom *";
      fieldName = "prenom";
      break;
    case "nom":
      text = "Nom *";
      fieldName = "nom";
      break;
    case "mail":
      text = "Mail *";
      fieldName = "mail";
      break;
    case "tel":
      text = "Téléphone *";
      fieldName = "tel";
      break;
    case "societe":
      text = "Sociéte *";
      fieldName = "societe";
      break;
    case "cp":
      text = "Code postal *";
      fieldName = "cp";
      break;
    case "ville":
      text = "Ville *";
      fieldName = "ville";
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
        <Field name="prenom" type="text" component={renderInputComponent} />
        <Field name="nom" type="text" component={renderInputComponent} />
        <Field name="mail" type="email" component={renderInputComponent} />
        <Field name="tel" type="text" component={renderInputComponent} />
        <Field name="societe" type="text" component={renderInputComponent} />
        <Field
          name="cp"
          type="text"
          component={renderInputComponent}
        />
        <Field name="ville" type="number" component={renderInputComponent} />
        <Field name="prestation" type="text" component={renderInputComponent} />
        <Field
          name="commentaire"
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
