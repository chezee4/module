import React from "react";
import { useNavigate } from "react-router-dom";

const PageHobby = ({ hobby }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h2>Хоббі:</h2>
        {hobby.map((hobby, index) => (
          <span>{hobby}</span>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Перейти до міста</button>
    </>
  );
};

export default PageHobby;
