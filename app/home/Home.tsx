"use client";
// React
import { FC } from "react";
// Components
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Category from "./components/Category/Category";
import BestSeller from "./components/BestSeller/BestSeller";

interface IHome {}

const HomePage: FC = ({}) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Category />
      <BestSeller />
    </>
  );
};

export default HomePage;
