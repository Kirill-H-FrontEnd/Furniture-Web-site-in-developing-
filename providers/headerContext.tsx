"use client";
// React
import { FC, createContext, useState } from "react";

interface IContext {
  children: React.ReactNode;
}
// useHeaderContext
export const useHeaderContext = createContext<boolean | any>(false);
const HeaderContext: FC<IContext> = ({ children }) => {
  const [isBurger, setBurger] = useState<boolean>(false);
  return (
    <useHeaderContext.Provider value={{ isBurger, setBurger }}>
      {children}
    </useHeaderContext.Provider>
  );
};

export default HeaderContext;
