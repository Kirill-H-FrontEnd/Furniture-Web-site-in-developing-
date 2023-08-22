"use client";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
// Styles
import s from "./Hero.module.scss";
// React
import { FC } from "react";
// Icons
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsPlayFill, BsArrowUpRightCircleFill } from "react-icons/bs";
// Next
import Image from "next/image";
import Link from "next/link";
// Font
import { Open_Sans } from "next/font/google";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
interface IHero {}

const Hero: FC = ({}) => {
  const DATA_SWIPER_CARDS = [
    {
      image: "/Images/hero/LivingRoomBanner.jpg",
      title: "Living Room",
      value: "250+",
      href: "",
    },
    {
      image: "/Images/hero/BedroomBanner.jpg",
      title: "Bedroom",
      value: "1250+",
      href: "",
    },
    {
      image: "/Images/hero/KitchenBanner.jpg",
      title: "Kitchen ",
      value: "350+",
      href: "",
    },
  ];
  const DATA_STATISTICS = [
    { value: "450+", title: "Collections" },
    { value: "15K+", title: "Customers" },
    { value: "4.9+", title: "Review Rating" },
  ];
  return (
    <section className={`${s.hero} bg-white_bg`}>
      <div style={font.style} className={`${s.sticker} bg-green text-white`}>
        Explore Now
      </div>
      <div className="container">
        <section className={s.hero_inner}>
          <section className={s.hero_content}>
            <div className={`${s.supTitle} bg-white text-black`}>
              <p className="text-green ">
                <FaMicrophoneAlt />
              </p>
              <p style={font.style}>
                Award Winning <span className="text-green">Furniture</span>{" "}
                Store
              </p>
            </div>
            <div className={s.info}>
              <h1 style={font.style} className="text-black_secondary">
                Make Your Interior Minimalist{" "}
                <span className="text-green">&</span> Modern
              </h1>
              <p className="text-gray">
                Delivering Comfort as a Priority: Quick and Easy Access to a
                Wide Variety fo Furniture.
              </p>
            </div>
            <div className={s.buttons}>
              <div>
                <button
                  style={font.style}
                  className="bg-green text-white hover:bg-white hover:text-green"
                >
                  Get Started
                </button>
              </div>
              <div>
                <button className="text-black bg-white  ">
                  <BsPlayFill />
                </button>
                <p style={font.style}>Watch Video</p>
              </div>
            </div>
            <div className={s.statistics}>
              {DATA_STATISTICS.map((item, i) => (
                <div key={i}>
                  <h5 style={font.style}>{item.value}</h5>
                  <p className="text-gray">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={s.hero_swiper}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1.3}
              modules={[Pagination]}
              className={s.swiper}
              pagination={{ clickable: true }}
            >
              {DATA_SWIPER_CARDS.map((slide, i) => (
                <SwiperSlide className={s.swiper_slide} key={i}>
                  <div className={s.slide_image}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className={s.slider_info}>
                    <h5 style={font.style} className="text-black_secondary">
                      {slide.title}
                    </h5>
                    <p className="text-gray">{slide.value} Items</p>
                    <Link href={slide.href}>
                      <p
                        title={slide.title}
                        className="text-green hover:text-black"
                      >
                        <BsArrowUpRightCircleFill />
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Hero;
