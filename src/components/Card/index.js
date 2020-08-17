import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none",
        }}
      ></div>
      <div>
        {props.firstName} {props.lastName}
      </div>
      <div>{props.email}</div>

      <div>{props.cell}</div>
    </div>
  );
}

export default Card;
