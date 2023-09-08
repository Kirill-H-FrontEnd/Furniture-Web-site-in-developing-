"use client";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// Styles
import s from "./Hero.module.scss";
// React
import { FC, SetStateAction, useEffect, useState } from "react";
// Icons
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsPlayFill, BsArrowUpRightCircleFill } from "react-icons/bs";
// Next
import Image from "next/image";
import Link from "next/link";

interface IHero {}

const Hero: FC = ({}) => {
  // Add class 'visible' for sticker
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setVisible(true);
      }
    });
  }, [window.scrollY]);
  // Data arrays
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
      <div
        className={`${s.sticker} ${
          isVisible ? s.visible : ""
        } bg-green text-white`}
      >
        Explore Now
      </div>
      <div className="container">
        <section className={s.hero_inner}>
          <section className={s.hero_content}>
            <div className={`${s.supTitle} bg-white text-black`}>
              <p className="text-green ">
                <FaMicrophoneAlt />
              </p>
              <p>
                Award Winning <span className="text-green">Furniture</span>{" "}
                Store
              </p>
            </div>
            <div className={s.info}>
              <h1 className="text-black_secondary">
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
                <button className="bg-green text-white hover:bg-white hover:text-green">
                  Get Started
                </button>
              </div>
              <div>
                <button className="text-black bg-white  ">
                  <BsPlayFill />
                </button>
                <p>Watch Video</p>
              </div>
            </div>
            <div className={s.statistics}>
              {DATA_STATISTICS.map((item, i) => (
                <div key={i}>
                  <h5>{item.value}</h5>
                  <p className="text-gray">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={s.hero_swiper}>
            <Swiper
              direction={"vertical"}
              grabCursor={true}
              mousewheel={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className={s.swiper}
              spaceBetween={20}
              modules={[Pagination, Autoplay, Mousewheel]}
              wrapperClass={s.swiper_wrapper}
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
                    <h5 className="text-black_secondary">{slide.title}</h5>
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
