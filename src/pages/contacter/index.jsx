import { useState } from "react";
import axios from "axios";
/*const { backendApi } = require("../../conf")*/

function Form() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    mail: "",
    tel: "",
    societe: "",
    cp: "",
    ville: "",
    prestation: "",
    commentaire: "",
  });

  const handleChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/contact", form)
      .then(({ data }) => {
        console.log("Comic was created");
      })
      .catch((err) => {
        console.warn("Something went poorly");
      });
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Prenom:
          <input
            name="prenom"
            type="text"
            placeholder="Didier"
            onChange={handleChange}
            value={form.prenom}
            required
          />
        </label>
        <br />
        <label>
          Nom:
          <input
            name="nom"
            type="text"
            placeholder="Super"
            onChange={handleChange}
            value={form.nom}
            required
          />
        </label>
        <br />
        <label>
          Mail:
          <input
            name="mail"
            type="email"
            placeholder="dsuper@gmail.com"
            onChange={handleChange}
            value={form.mail}
          />
        </label>
        <br />
        <label>
          Téléphone:
          <input
            name="tel"
            type="tel"
            placeholder="0322568978"
            onChange={handleChange}
            value={form.tel}
            required
          />
        </label>
        <br />
        <label>
          Nom de société:
          <input
            name="societe"
            type="text"
            placeholder="societe.com"
            onChange={handleChange}
            value={form.societe}
          />
        </label>
        <br />
        <label>
          Code Postal:
          <input
            name="cp"
            type="text"
            placeholder="60000"
            onChange={handleChange}
            value={form.cp}
            required
          />
        </label>
        <br />
        <label>
          Ville:
          <input
            name="ville"
            type="text"
            placeholder="Beauvais"
            onChange={handleChange}
            value={form.ville}
            required
          />
        </label>
        <br />
        <label>
          Type de prestation:
          <input
            name="prestation"
            type="text"
            placeholder="je veux du mais"
            onChange={handleChange}
            value={form.prestation}
            required
          />
        </label>
        <br />
        <label>
          Commentaires:
          <textarea
            name="commentaire"
            onChange={handleChange}
            value={form.commentaire}
          />
        </label>
        <br />
        <input type="Submit" readOnly value="Nous contacter!" />
      </form>
    </>
  );
}

export default Form;
