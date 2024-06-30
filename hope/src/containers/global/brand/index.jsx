import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Brand from "../../../components/brand";
import HomeData from "../../../data/home.json";

const BrandContainer = () => {
    const swiperOption = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: false,
        breakpoints: {
            1200: {
                slidesPerView: 5,
                spaceBetween: 100,
            },

            992: {
                slidesPerView: 4,
                spaceBetween: 90,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 110,
            },

            576: {
                slidesPerView: 3,
                spaceBetween: 60,
            },

            380: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    };
    return (
        <div
            className="brand-section bg-img"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/photos/testimonial-bg1.jpg)`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="brand-logo-area brand-logo-default-area"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <Swiper
                            className="brand-logo-slider-container"
                            {...swiperOption}
                        >
                            {HomeData[6].brand &&
                                HomeData[6].brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
