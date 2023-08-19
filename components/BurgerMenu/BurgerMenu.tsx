"use client";
// Styles
import s from "./BurgerMenu.module.scss";
// React
import { Dispatch, FC, SetStateAction } from "react";

interface IBurgerMenu {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenu> = ({ active, setActive }) => {
  return (
    <div
      onClick={() => setActive(!active)}
      className={`${s.burgerMenu} ${active ? s.active : ""}`}
    >
      <span className="bg-white"></span>
      <span className="bg-white"></span>
      <span className="bg-white"></span>
    </div>
  );
};

export default BurgerMenu;
