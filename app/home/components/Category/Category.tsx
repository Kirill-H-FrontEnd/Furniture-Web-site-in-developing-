// React
import { FC } from "react";
// Styles
import s from "./Category.module.scss";
// Font
import { Open_Sans } from "next/font/google";
// Icons
import { BsArrowUpRightCircleFill } from "react-icons/bs";
// Next
import Link from "next/link";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
interface ICategory {}

const Category: FC = ({}) => {
  const DATA_CONTENT_ITEMS = [
    {
      image: "/Images/category/Office.jpg",
      title: "Office",
      href: "",
      info: "350+ Items",
    },
    {
      image: "/Images/category/Bedroom.jpg",
      title: "Bedroom",
      href: "",
      info: "350+ Items",
    },
    {
      image: "/Images/category/LivingRoom.jpg",
      title: "Living Room",
      href: "",
      info: "350+ Items",
    },
    {
      image: "/Images/category/Kitchen.jpg",
      title: "Kitchen",
      href: "",
      info: "350+ Items",
    },
  ];
  return (
    <section className={`${s.category} bg-white_bg`}>
      <div className="container">
        <section className={s.inner}>
          <section className={s.header}>
            <h3 style={font.style} className="text-green">
              Category
            </h3>
            <h2 style={font.style} className="text-black_secondary">
              Discover Our Unique Collection of Exclusive Categories.
            </h2>
          </section>
          <section className={s.content}>
            {DATA_CONTENT_ITEMS.map((item, i) => (
              <article key={i} className={`${s.item} `}>
                <img src={item.image} alt="" />
                <div className={s.info}>
                  <h5 className="text-white">{item.title}</h5>
                  <p className="text-gray">{item.info}</p>
                  <Link href={item.href}>
                    <span>
                      <BsArrowUpRightCircleFill />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default Category;
