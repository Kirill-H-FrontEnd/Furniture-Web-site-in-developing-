// Styles
import Image from "next/image";
import s from "./Offers.module.scss";
// React
import { FC } from "react";
import Link from "next/link";

interface IOffers {}

const Offers: FC = ({}) => {
  return (
    <section className={s.offers}>
      <section className={s.inner}>
        <section className={s.images}>
          <div>
            <img src="/Images/offers/img3.jpg" alt="" />
          </div>
          <div>
            <img src="/Images/offers/img2.jpg" alt="" />
          </div>
          <div>
            <img src="/Images/offers/img1.jpg" alt="" />
          </div>
        </section>
        <section className={s.content}>
          <img src="/Images/offers/bgImg.jpg" alt="" />
          <article>
            <h3 className="text-green">Offers</h3>
            <h2 className="text-white">
              Get Upto 50% Offer On Festival Seasons!
            </h2>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              quia illo non nesciunt, ea ratione quidem officiis aliquam debitis
              facilis reiciendis placeat deserunt consequatur voluptates fugiat
              nostrum eligendi veniam animi.
            </p>
            <Link
              className="bg-green text-white hover:bg-white hover:text-green"
              href={""}
            >
              Redeem Now
            </Link>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Offers;
