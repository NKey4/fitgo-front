import React from "react";
import { useDispatch } from "react-redux";
import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";

import "./Main.scss";

import axios from "../../axios";

export const Main = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {}, []);
  return (
    <main className="Main">
      <div className="mainLeft">
        <h4 className="h4_mainLeft">0 · 0 · 12</h4>
        <h1 className="h1_mainLeft">Ваш абонемент на все виды спорта</h1>
        <div className="price_mainLeft">
          <Link to="/pricing">
            <button className="button_price_mainLeft">Посмотреть Цены</button>
          </Link>
          <h4 className="h4_mainLeft">От 16250 ₸ / месяц</h4>
        </div>
      </div>
      <ImageSlider
        images={["sport1.png", "sport2.png", "sport3.png", "sport4.png"]}
      />
    </main>
  );
};
