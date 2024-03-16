import React from "react";

function Card({ name, description, link }) {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "400px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          padding: "5px",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <img src={link} alt="" width={200} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
