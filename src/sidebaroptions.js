import React from "react";
import "./css/Sidebaroptions .css";

function Sidebaroptions(props, isactive) {
  return (
    <div className={`options ${isactive && `options--active`}`}>
      <props.icon />
      <h4>{props.title}</h4>
      <p> {props.number}</p>
    </div>
  );
}

export default Sidebaroptions;
