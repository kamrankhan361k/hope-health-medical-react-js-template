import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import HomeData from "../../../data/home.json";
import Team from "../../../components/team";
import SectionTitle from "../../../components/section-title";

SwiperCore.use([Pagination]);
const TeamContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: { clickable: true },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },

            991: {
                slidesPerView: 2,
            },

            767: {
                slidesPerView: 2,
            },

            560: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className="team-area team-default-area bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle="Meet Our Docots"
                            title="<span>Professional &amp;</span> Enthusiastic"
                        />
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-duration="1300"
                    >
                        <Swiper
                            className="team-slider-container"
                            {...swiperOption}
                        >
                            {HomeData[4].team &&
                                HomeData[4].team.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Team key={key} data={single} />
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

export default TeamContainer;
