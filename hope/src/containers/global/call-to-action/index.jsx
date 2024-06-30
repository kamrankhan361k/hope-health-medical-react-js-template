import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div
            className="divider-area bgcolor-theme bg-img"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/shape/01.jpg)`,
            }}
        >
            <div className="container">
                <div className="row content-align-center">
                    <div className="col-lg-12">
                        <div
                            className="divider-content-area divider-content-style1"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="content-inner">
                                <h2>
                                    Book An <span>Appointment</span>
                                </h2>
                                <p>
                                    We prodive a dedicated support 24/7 for any
                                    your question
                                </p>
                            </div>
                            <Link to="/" className="btn btn-theme btn-white">
                                Reservation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
