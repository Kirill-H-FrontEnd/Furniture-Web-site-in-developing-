// Styles
import s from "./Benefits.module.scss";
// React
import { FC } from "react";
// Icons
import { GiWallet } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCube } from "react-icons/io";
// Font
import { Open_Sans } from "next/font/google";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
interface IBenefits {}

const Benefits: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <GiWallet />,
      title: "Easy Payment",
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sunt ea cum esse! Ducimus aliquid eos, sit et quos molestias?",
    },
    {
      icon: <BiSolidOffer />,
      title: "Promo Offers",
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sunt ea cum esse! Ducimus aliquid eos, sit et quos molestias?",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Free Delivery",
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sunt ea cum esse! Ducimus aliquid eos, sit et quos molestias?",
    },
    {
      icon: <IoMdCube />,
      title: "Easy Return",
      text: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sunt ea cum esse! Ducimus aliquid eos, sit et quos molestias?",
    },
  ];
  return (
    <section className={`${s.benefits} bg-white`}>
      <div className="container">
        <section className={s.inner}>
          <section className={s.header}>
            <h3 style={font.style} className="text-green">
              Benefits
            </h3>
            <h2 style={font.style} className="text-black_secondary">
              {" "}
              What Makes Us the Preferred Choice?
            </h2>
          </section>
          <section className={s.cards}>
            {DATA_CARDS.map((card, i) => (
              <article key={i} className={`${s.card} bg-white_bg`}>
                <div className="bg-white">{card.icon}</div>
                <h4 style={font.style} className="text-black_secondary">
                  {card.title}
                </h4>
                <p className="text-gray">{card.text}</p>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Benefits;
