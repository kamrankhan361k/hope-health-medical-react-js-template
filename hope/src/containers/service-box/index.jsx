import React from "react";
import SectionTitle from "../../components/section-title";
import ServiceItem from "../../components/service-item";
import ServiceData from "../../data/service.json";

const ServiceContainer = () => {
    return (
        <div className="service-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle="Our services"
                            title="<span>Best Solution</span> For Your Health"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="row service-style2"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {ServiceData &&
                                ServiceData.map((single, key) => {
                                    return (
                                        <ServiceItem key={key} data={single} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer;
