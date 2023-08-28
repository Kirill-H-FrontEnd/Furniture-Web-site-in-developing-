// Styles
import s from "./Benefits.module.scss";
// React
import { FC } from "react";
// Icons
import { GiWallet } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCube } from "react-icons/io";

interface IBenefits {}

const Benefits: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <GiWallet />,
      title: "Easy Payment",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum totam autem, expedita distinctio repellat voluptatum atque nihil esse ea incidunt, a velit ut cupiditate amet voluptatibus animi saepe officiis nam.",
    },
    {
      icon: <BiSolidOffer />,
      title: "Promo Offers",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum totam autem, expedita distinctio repellat voluptatum atque nihil esse ea incidunt, a velit ut cupiditate amet voluptatibus animi saepe officiis nam.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Free Delivery",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum totam autem, expedita distinctio repellat voluptatum atque nihil esse ea incidunt, a velit ut cupiditate amet voluptatibus animi saepe officiis nam.",
    },
    {
      icon: <IoMdCube />,
      title: "Easy Return",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum totam autem, expedita distinctio repellat voluptatum atque nihil esse ea incidunt, a velit ut cupiditate amet voluptatibus animi saepe officiis nam.",
    },
  ];
  return (
    <section className={`${s.benefits} bg-white`}>
      <div className="container">
        <section className={s.inner}>
          <section className={s.header}>
            <h3 className="text-green">Benefits</h3>
            <h2 className="text-black_secondary">
              {" "}
              What Makes Us the Preferred Choice?
            </h2>
          </section>
          <section className={s.cards}>
            {DATA_CARDS.map((card, i) => (
              <article key={i} className={`${s.card} bg-white_bg`}>
                <div className="bg-white">{card.icon}</div>
                <h4 className="text-black_secondary">{card.title}</h4>
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
