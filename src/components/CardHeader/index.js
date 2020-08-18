import React from "react";
import Card from "../Card";

function CardHeader(props) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <Card results={props.results}></Card>
      </table>
    </div>
  );
}

export default CardHeader;
