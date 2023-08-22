"use client";
import { FC } from "react";
// Components
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Category from "./components/Category/Category";

interface IHome {}

const HomePage: FC = ({}) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Category />
    </>
  );
};

export default HomePage;
