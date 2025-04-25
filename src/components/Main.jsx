import React, { useState } from "react";
import GrandParents from "./GrandParents";

const Main = () => {
  const [user, setUser] = useState({
    name: "Gnanashekar",
    age: 35,
  });
  return (
    <div
      style={{
        border: "1px solid red",
        width: "700px",
        height: "500px",
        margin: "auto",
        marginTop: "80px",
        backgroundColor: "blue",
      }}
    >
      <GrandParents user={user}/>
    </div>
  );
};

export default Main;
