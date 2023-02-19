import React, { useContext } from "react";
import ChildC from "./ChildC";
import { data, data1 } from "./App";

const ChildB = () => {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <div>
      <ChildC />
      <h1>
        Hi my name is {name} and my gender is {gender}
      </h1>
    </div>
  );
};

export default ChildB;
