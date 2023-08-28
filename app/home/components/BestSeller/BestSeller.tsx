// React
import { FC } from "react";
// Icons
import { AiFillStar } from "react-icons/ai";
// Styles
import s from "./BestSeller.module.scss";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { DATA } from "@/server/data";
import Image from "next/image";
interface IBestSeller {}

const BestSeller: FC = ({}) => {
  return (
    <section className={s.bestSeller}>
      <div className="container">
        <section className={s.inner}>
          <section className={s.header}>
            <h3 className="text-green">Best Seller</h3>
            <h2 className="text-black_secondary">Our Best Seller Products</h2>
          </section>
          <section className={s.content}>
            <Tabs
              aria-label="Best Seller"
              items={DATA}
              fullWidth
              size="lg"
              variant="solid"
              classNames={{
                base: s.base,
                tabList: s.tabList,
                tab: s.tab,
                tabContent: "group-data-[selected=true]:text-[#fff]",
                cursor: "bg-black",
                panel: s.panel,
              }}
            >
              {DATA.map((item) => (
                <Tab key={item.title} title={item.title}>
                  <Card className={s.wrapper}>
                    {item.cards.map((card, i) => (
                      <CardBody key={i} className={s.card}>
                        <div className={`${s.img} bg-white_bg`}>
                          <img src={card.image} alt="" />
                          <span className={`${s.rating} bg-white`}>
                            <span>
                              <AiFillStar />
                            </span>
                            {card.rating}
                          </span>
                        </div>
                        <div className={s.content}>
                          <h4 className="text-black_secondary">{card.value}</h4>
                          <h5 className="text-gray">{card.category}</h5>
                          <span>${card.prise}</span>
                        </div>
                      </CardBody>
                    ))}
                  </Card>
                </Tab>
              ))}
            </Tabs>
          </section>
        </section>
      </div>
    </section>
  );
};

export default BestSeller;
