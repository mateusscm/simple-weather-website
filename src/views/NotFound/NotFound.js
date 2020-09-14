import React from "react";
import notFound from "../../assets/images/snow.png";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 10,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        alt="Nada por aqui..."
        src={notFound}
        style={{ width: "50vw", height: "65vh", marginBottom: 20 }}
      />
      <h1>
        <b>ERROR 404</b>
      </h1>
      <h3>Parece que não há nada por aqui...</h3>
    </div>
  );
}
