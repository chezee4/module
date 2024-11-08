import React from "react";
import { useNavigate } from "react-router-dom";

const PageCity = ({ city }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Місто: {city}</h2>
      <button onClick={() => navigate("/pagehobby")}>Перейти до хоббі</button>
    </div>
  );
};

export default PageCity;
