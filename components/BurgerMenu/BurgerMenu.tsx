"use client";
// Styles
import s from "./BurgerMenu.module.scss";
// React
import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";

interface IBurgerMenu {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenu> = ({ active, setActive }) => {
  useEffect(() => {
    // Add hide class for body
    if (active) {
      document.querySelector("body")?.classList.add("hide");
    } else {
      document.querySelector("body")?.classList.remove("hide");
    }
  }, [active]);
  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className={`${s.burgerMenu} ${active ? s.active : ""}`}
    >
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <span className="bg-white"></span>
    </div>
  );
};

export default BurgerMenu;
