import React from "react";
import Parent from "./Parent";

const GrandParents = ({user}) => {
  return (
    <div
      style={{
        border: "1px solid red",
        width: "600px",
        height: "400px",
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "yellow",
      }}
    >
        <Parent user={user}/>
    </div>
  );
};

export default GrandParents;
