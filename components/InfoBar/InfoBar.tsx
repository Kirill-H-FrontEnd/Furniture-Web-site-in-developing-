"use client";
// Next
import Link from "next/link";
// React
import { FC, useEffect, useState } from "react";
// Styles
import s from "./InfoBar.module.scss";
// Icons
import { IoClose } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
interface IInfoBar {}

const InfoBar: FC = ({}) => {
  // const STATUS = sessionStorage.getItem("infoBar");
  // const [isInfoBar, setInfoBar] = useState(!STATUS);
  // useEffect(() => {
  //   sessionStorage.setItem("infoBar", JSON.stringify(isInfoBar));
  // }, []);

  return (
    <>
      {/* {isInfoBar === true && (
        <section className={`${s.infoBar} bg-white text-black`}>
          <div className="container">
            <section style={font.style} className={s.infoBar_inner}>
              <div>
                <p className="text-green">
                  <BiSupport />
                </p>
                <p>Support</p>
                <p>(406) 555-555</p>
              </div>
              <div>
                <p>
                  Sign up and GET 20% OFF for your first order.
                  <Link className="text-green" href="">
                    Sign up now
                  </Link>
                </p>
              </div>
              <button onClick={() => setInfoBar(false)}>
                <p className="text-black ">
                  {" "}
                  <IoClose />
                </p>
              </button>
            </section>
          </div>
        </section>
      )} */}
      <section className={`${s.infoBar} bg-white text-black`}>
        <div className="container">
          <section className={s.infoBar_inner}>
            <div>
              <p className="text-green">
                <BiSupport />
              </p>
              <p>Support</p>
              <p>(406) 555-555</p>
            </div>
            <div>
              <p>
                Sign up and GET 20% OFF for your first order.
                <Link className="text-green" href="">
                  Sign up now
                </Link>
              </p>
            </div>
            <button
            // onClick={CloseBar}
            >
              <p className="text-black ">
                {" "}
                <IoClose />
              </p>
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default InfoBar;
