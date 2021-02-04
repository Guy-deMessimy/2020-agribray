import React from "react";
import { useState } from "react";
import Works from "../../../components/works";
import { useSelector, useDispatch } from "react-redux";
import { addWorksAction } from "../../../redux/actions";
import axios from "axios";

const TravauxList = () => {

  const [work, setWork] = useState([]);
  const works = useSelector((state) => state.works.data);
  const dispatch = useDispatch();
  console.log(works);

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

  const { nom, mail, prestation } = form;

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


  const workOnChange = (event) => {
    setWork(event.target.value);
  };
  const addWork = () => {
    dispatch(addWorksAction(work));
    setWork("");
  };

  return (
    <>
      <span>To-Do List</span>
      <input type="text" onChange={workOnChange} value={work} />
      <button type="button" onClick={addWork}>
        Add Task
      </button>
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
        <input type="Submit" readOnly value="Nous contacter!" />
      </form>
    </>
  );
};

export default TravauxList;
