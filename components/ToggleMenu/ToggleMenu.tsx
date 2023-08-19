"use client";

// Styles
import s from "./ToggleMenu.module.scss";
// React
import { FC } from "react";

interface IToggleMenu {}

const ToggleMenu: FC = ({}) => {
  return (
    <section className={`${s.toggleMenu_wrapper} bg-black/50`}>
      <nav className={`${s.toggleMenu_nav} bg-green`}></nav>
    </section>
  );
};

export default ToggleMenu;
