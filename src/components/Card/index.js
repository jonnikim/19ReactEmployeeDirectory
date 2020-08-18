import React from "react";

function Card(props) {
  return (
    <tbody>
      {props.results.map((results) => (
        <tr>
          <td> {results.name.first}</td>
          <td> {results.name.last}</td>
          <td> {results.email}</td>
          <td> {results.cell}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Card;
