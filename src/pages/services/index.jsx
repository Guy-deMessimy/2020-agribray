import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Services from "../../components";

const TravauxList = () => {
  const [travaux, setTravaux] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/travaux")
      .then(({ data }) => {
        setTravaux(data);
      })
      .catch((err) => {
        console.warn("Something went poorly");
      });
  }, [travaux]);

 
//  try catch finally

  return (
    <>
      <div>
        {travaux.map(({ id, nature, image1 }) => {
          return <Services key={id} id={id} nature={nature} image1={image1} />;
        })}
        ;
      </div>
    </>
  );
};

export default TravauxList;
