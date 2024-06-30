import React from "react";
import PropTypes from "prop-types";

const SidebarTitle = ({ title, classOption }) => {
    return (
        <React.Fragment>
            <h4 className={`widget-title ${classOption}`}>{title}</h4>
        </React.Fragment>
    );
};

SidebarTitle.propTypes = {
    title: PropTypes.string,
    classOption: PropTypes.string,
};

SidebarTitle.defaultProps = {
    classOption: "widget-title",
};

export default SidebarTitle;
