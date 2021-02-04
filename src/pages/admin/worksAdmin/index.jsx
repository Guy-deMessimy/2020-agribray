import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWorksAction } from "../../../redux/actions";
import axios from "axios";

const AddWorks = () => {
  const [work, setWork] = useState();
  const works = useSelector((state) => state.works);
  const dispatch = useDispatch();
  console.log(work)

  const workOnChange = (e) => {
    console.log("got field " + e.target.name + ", value " + e.target.value);
    setWork(e.target.value);
  };

  const addWork = (e) => {
    dispatch(addWorksAction(work));
    setWork("");
    console.log(works);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/auth/travaux", works)
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
        <input type="text" name="nature" onChange={workOnChange} value={work} />
        <br />
        <button type="button" onClick={addWork}>
          Add work
        </button>
        <br />
        <input type="Submit" readOnly value="Submit work" />
      </form>
    </>
  );
};

export default AddWorks;
