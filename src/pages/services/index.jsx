import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Services from "../../components";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TravauxList = () => {
  const [travaux, setTravaux] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/travaux")
      .then(({ data }) => {
        setTravaux(data);
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
      .finally(toast)
  }, [travaux]);


  return (
    <>
      {travaux.map(({ id, nature, image1 }) => {
        return <Services key={id} id={id} nature={nature} image1={image1} />
      })}
      <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={8000}
      ></ToastContainer>
    </>
  );
};

export default TravauxList;
