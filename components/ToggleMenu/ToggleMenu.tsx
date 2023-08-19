"use client";

import { useHeaderContext } from "@/providers/headerContext";
// Styles
import s from "./ToggleMenu.module.scss";
// React
import { FC, useContext } from "react";

interface IToggleMenu {}

const ToggleMenu: FC = ({}) => {
  const { isBurger, setBurger } = useContext(useHeaderContext);
  return (
    <section
      onClick={() => setBurger(false)}
      className={`${s.toggleMenu_wrapper} ${
        isBurger ? s.active : ""
      } bg-black/50`}
    >
      <nav className={`${s.toggleMenu_nav} bg-green`}></nav>
    </section>
  );
};

export default ToggleMenu;
