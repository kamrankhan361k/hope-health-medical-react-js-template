import React from "react";
import PageTitle from "../../../components/page-title";
import PropTypes from "prop-types";

const PageTitleContainer = ({ subTitle, title, image }) => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <div
            className="page-title-area bg-img bg-img-top"
            style={{ backgroundImage: `url(${publicUrl}/${image})` }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 col-xl-7 m-auto"
                        data-aos="fade-up"
                    >
                        <PageTitle subTitle={subTitle} title={title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

PageTitleContainer.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default PageTitleContainer;
