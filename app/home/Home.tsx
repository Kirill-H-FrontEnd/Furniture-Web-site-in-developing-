"use client";
import { FC } from "react";
// Components
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

interface IHome {}

const HomePage: FC = ({}) => {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  );
};

export default HomePage;
