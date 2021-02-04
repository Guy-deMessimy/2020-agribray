import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWorksAction } from "../../../redux/actions";
import axios from "axios";

const AddWorks = () => {
  const [work, setWork] = useState([]);
  const works = useSelector((state) => state.works.data);
  const dispatch = useDispatch();
  console.log(works);

  const workOnChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  const addWork = () => {
    dispatch(addWorksAction(work));
    setWork("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/auth/travaux", work)
      .then(({ data }) => {
        console.log("Work was created");
      })
      .catch((err) => {
        console.warn("Something went poorly");
      });
    console.log(work);
  };

  return (
    <>
      <span>Add Works</span>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={workOnChange} value={work} />
         <button type="button" onClick={addWork}></button>
        <input type="Submit" readOnly value="Ajouter un travail" />
      </form>
    </>
  );
};

export default AddWorks;
