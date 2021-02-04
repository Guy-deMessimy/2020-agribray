import React from "react";
import { useState } from "react";
import Works from "../../../components/works";
import { useSelector, useDispatch } from "react-redux";
import { addWorksAction } from "../../../redux/actions";

const TravauxList = () => {
  const [work, setWork] = useState([]);
  const works = useSelector((state) => state.works.data);
  const dispatch = useDispatch();
  console.log(works);

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
      <div>
        {work.map(({ id, nature, image1 }) => {
          return <Works key={id} id={id} nature={nature} image1={image1} />;
        })}
      </div>
    </>
  );
};

export default TravauxList;