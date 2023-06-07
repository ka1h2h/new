import { useEffect, useState } from "react";
import "./Header.css";

export const Header = () => {
  const [state, setState] = useState();
  const today = new Date();
  const now = today.toLocaleString();
  useEffect(() => {
    const timer = setInterval(() => {
      setState(now);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [now]);
  const currentTime = state ? state.split(" ") : [];
  return (
    <div className="cardPayment_header">
      <div className="cardPayment_header-container">
        <ul className="cardPayment_header__list">
          <li className="cardPayment_header__list-item">
            {currentTime[0]?.replace(/[\s,%]/g, "")}
          </li>
          <li className="cardPayment_header__list-item">{currentTime[1]}</li>
          <li className="cardPayment_header__list-item">Касса #1</li>
        </ul>
      </div>
    </div>
  );
};
