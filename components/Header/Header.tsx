"use client";

// Styles
import s from "./Header.module.scss";
// React
import { FC, useContext } from "react";
// Icons
import { BsFillBasket2Fill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { PiCopyright } from "react-icons/pi";
// Components
import InfoBar from "@/components/InfoBar/InfoBar";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// Context
import { useHeaderContext } from "@/providers/headerContext";

interface IHeader {}

const Header: FC = ({}) => {
  const { isBurger, setBurger } = useContext(useHeaderContext);
  const pathPage = usePathname();

  const DATA_LINKS = [
    { value: "Home", href: "/" },
    { value: "About", href: "/about" },
    { value: "Testimonial", href: "/testimonial" },
    { value: "Blog", href: "/blog" },
    { value: "Contacts Us", href: "/contacts" },
  ];
  return (
    <header className={`${s.header} bg-black shadow-lg shadow-black/20`}>
      <InfoBar />
      <div className="container">
        <section className={s.header_inner}>
          <nav className={`${s.nav} text-white `}>
            <section className={s.header_nav}>
              <Link href={"/"} className={s.logo}>
                <span>
                  Furniture <PiCopyright />
                </span>
              </Link>
              <ul className={s.links}>
                {DATA_LINKS.map((link, i) => (
                  <li
                    key={i}
                    className={pathPage === link.href ? s.active : ""}
                  >
                    <Link
                      className={`${
                        pathPage === link.href ? `${s.active} text-green` : ""
                      } ${"hover:text-green"}`}
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <div className={s.controls}>
              <div>
                <p title="Search">
                  <RiSearchLine />
                </p>
                <p title="Store basket">
                  <BsFillBasket2Fill />
                </p>
              </div>
              <div>
                <Link className="hover:text-green" href={""}>
                  Sign Up
                </Link>
                <Link
                  className="bg-green text-white hover:bg-white hover:text-green"
                  href={""}
                >
                  Sign In
                </Link>
              </div>
            </div>
            <BurgerMenu active={isBurger} setActive={setBurger} />
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
