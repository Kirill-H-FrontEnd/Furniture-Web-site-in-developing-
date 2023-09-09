"use client";
// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// React
import { FC } from "react";

interface INotFound {}

const NotFound: FC = ({}) => {
  const pathPage: any = usePathname().replace("/", "");
  return (
    <section className=" w-full h-screen grid place-items-center">
      <article className=" text-center leading-none">
        <h1 className="text-404 font-bold text-green">404</h1>
        <h2 className="uppercase font-semibold text-2xl text-black">
          OOPS! PAGE <span className="text-green">"{pathPage}"</span> NOT FOUND{" "}
        </h2>
        <p className="text-gray text-xl mt-2 max-w-lg">
          Sorry, this page was not found. Try again later or let tech support
          know.
        </p>
        <div className="my-10">
          <Link
            className="border-solid border-2 py-2 px-4 border-green text-green rounded-full mr-5"
            href={""}
          >
            Return Home
          </Link>
          <Link
            className="border-solid border-2 py-2 px-9 border-green text-green rounded-full"
            href={""}
          >
            Support
          </Link>
        </div>
      </article>
    </section>
  );
};

export default NotFound;
