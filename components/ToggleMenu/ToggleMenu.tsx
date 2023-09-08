"use client";
// Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// Accordion
import { Accordion, AccordionItem } from "@nextui-org/accordion";
// Context
import { useHeaderContext } from "@/providers/headerContext";
// Icons
import { PiCopyright } from "react-icons/pi";
import {
  AiOutlineShopping,
  AiOutlineHome,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
// Styles
import s from "./ToggleMenu.module.scss";
// React
import { FC, useContext } from "react";

interface IToggleMenu {}

const ToggleMenu: FC = ({}) => {
  const pathPage = usePathname();
  const { isBurger, setBurger } = useContext(useHeaderContext);
  const DATA_LINKS = [
    {
      title: "Company",
      icon: <AiOutlineHome />,
      links: [
        { value: "Home", href: "/" },
        { value: "About Us", href: "about" },
        { value: "Blog", href: "blog" },
        { value: "Careers", href: "careers" },
        { value: "Our team", href: "team" },
        { value: "Help center", href: "" },
      ],
    },
    {
      title: "Shop",
      icon: <AiOutlineShopping />,
      links: [
        { value: "Gift Cards", href: "" },
        { value: "Our Products", href: "" },
        { value: "My Accounts", href: "" },
        { value: "Shipping", href: "" },
        { value: "Returns", href: "" },
      ],
    },
    {
      title: "Support",
      icon: <BiSupport />,
      links: [
        { value: "Contacts Us", href: "" },
        { value: "Payment Options", href: "" },
        { value: "Store Locator", href: "" },
        { value: "Accessability", href: "" },
        { value: "Affiliates", href: "" },
      ],
    },
    {
      title: "Accounts",
      icon: <MdOutlineAccountCircle />,
      links: [
        { value: "Sign In", href: "signIn" },
        { value: "Sign Up", href: "signUp" },
      ],
    },
    {
      title: "FAQ",
      icon: <AiOutlineQuestionCircle />,
      links: [
        { value: "Rewards FAQ", href: "" },
        { value: "Product Care", href: "" },
        { value: "Size Guide", href: "" },
      ],
    },
  ];
  return (
    <section
      onClick={() => setBurger(false)}
      className={`${s.toggleMenu_wrapper} ${
        isBurger ? s.active : ""
      } bg-black/50`}
    >
      <nav
        className={`${s.toggleMenu_nav} bg-white`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${s.logo} text-green`}>
          <span>
            {" "}
            Furniture <PiCopyright />
          </span>
        </div>
        <Accordion
          variant="splitted"
          className={s.acc_wrapper}
          isCompact
          itemClasses={{
            base: s.accordion,
            title: s.title,
            indicator: s.indicator,
            content: s.content,
            startContent: s.startContent,
          }}
        >
          {DATA_LINKS.map((item, i) => (
            <AccordionItem
              className="text-green"
              startContent={item.icon}
              key={i}
              title={item.title}
            >
              {item.links.map((link, i) => (
                <Link
                  className={pathPage === link.href ? s.active : ""}
                  key={i}
                  href={link.href}
                >
                  {link.value}
                </Link>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </nav>
    </section>
  );
};

export default ToggleMenu;
