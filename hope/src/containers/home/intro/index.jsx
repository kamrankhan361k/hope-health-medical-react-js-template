import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import HomeData from "../../../data/home.json";
import Intro from "../../../components/intro";

SwiperCore.use([Navigation]);
const IntroContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".hero-slider .swiper-button-next",
            prevEl: ".hero-slider .swiper-button-prev",
        },
    };
    return (
        <div className="hero-slider-area">
            <Swiper effect="fade" className="hero-slider" {...swiperOption}>
                {HomeData[1].slider &&
                    HomeData[1].slider.map((single, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Intro key={key} data={single} />
                            </SwiperSlide>
                        );
                    })}
                <div className="swiper-button-prev">
                    <i className="icofont-arrow-left"></i>
                </div>
                <div className="swiper-button-next">
                    <i className="icofont-arrow-right"></i>
                </div>
            </Swiper>
        </div>
    );
};

export default IntroContainer;
