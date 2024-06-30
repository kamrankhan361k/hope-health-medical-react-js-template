import React from "react";
import PropTypes from "prop-types";

const HeaderContactInfo = ({ data }) => {
    return (
        <li className="media media-list">
            <span className="media-icon">
                <i className={data.icon}></i>
            </span>
            <div className="media-content">
                <span className="media-sub-heading">{data.title}</span>
                <span className="media-heading">{data.info}</span>
            </div>
        </li>
    );
};

HeaderContactInfo.propTypes = {
    data: PropTypes.object,
};

export default HeaderContactInfo;
