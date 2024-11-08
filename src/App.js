import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./feature/header";
import { Footer } from "./feature/footer";
import PageCity from "./pages/page-city";
import PageHobby from "./pages/page-hobby";
const App = () => {
  const chezee = {
    name: "Вадим",
    surname: "Дуфинець",
    group: "ІСТ 3 курс ",
    city: "с.Ракошино",
    hobby: ["спати", "грати", "їсти"],
  };

  return (
    <BrowserRouter>
      <Header name={chezee.name} surname={chezee.surname} />
      <Routes>
        <Route path="/" element={<PageCity city={chezee.city} />} />
        <Route path="/pagehobby" element={<PageHobby hobby={chezee.hobby} />} />
      </Routes>
      <Footer group={chezee.group} />
    </BrowserRouter>
  );
};

export default App;
