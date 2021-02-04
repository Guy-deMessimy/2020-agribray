import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Works from "../../components/works";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TravauxList = () => {
  const [work, setWork] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5050/travaux")
      .then(({ data }) => {
        setWork(data);
      })
      .catch((err) => {
        if (err) {
          toast("API ERROR", {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .finally(toast);
  }, [work]);

  return (
    <>
      <div>
        {work.map(({ id, nature, image1 }) => {
          return <Works key={id} id={id} nature={nature} image1={image1} />;
        })}
        <ToastContainer
          draggable={false}
          transition={Zoom}
          autoClose={8000}
        ></ToastContainer>
      </div>
    </>
  );
};

export default TravauxList;
