"use client";
// React
import { FC, useState } from "react";
// Styles
import s from "./CookieModal.module.scss";
// Next
import Link from "next/link";
interface ICookieModal {}

const CookieModal: FC = ({}) => {
  // const statusCoolieModal = sessionStorage.getItem("CookieModal");
  // const [isActive, setActive] = useState(!statusCoolieModal);
  // const CloseModal = () => {
  //   setActive(false);
  //   sessionStorage.setItem("CookieModal", JSON.stringify(isActive));
  // };
  return (
    <>
      {/* {isActive === true && (
        <section className={`${s.cookieModal} bg-white text-green`}>
          <div className="container">
            <section>
              <p style={font.style}>
                This site uses cookies for your convenience.
                <Link
                  style={font.style}
                  className="text-black "
                  target="_blank"
                  href={"https://policies.google.com/technologies/cookies"}
                >
                  Learn more
                </Link>
              </p>
              <div>
                <button
                  onClick={CloseModal}
                  style={font.style}
                  className="bg-green text-white hover:bg-black hover:text-white"
                >
                  Ok, got it
                </button>
              </div>
            </section>
          </div>
        </section>
      )} */}
      <section className={`${s.cookieModal} bg-white text-green`}>
        <div className="container">
          <section>
            <p>
              This site uses cookies for your convenience.
              <Link
                className="text-black "
                target="_blank"
                href={"https://policies.google.com/technologies/cookies"}
              >
                Learn more
              </Link>
            </p>
            <div>
              <button
                // onClick={CloseModal}

                className="bg-green text-white hover:bg-black hover:text-white"
              >
                Ok, got it
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CookieModal;
