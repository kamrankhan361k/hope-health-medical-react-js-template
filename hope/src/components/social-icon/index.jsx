import PropTypes from "prop-types";

const SocialIcon = ({ path, icon }) => {
    return (
        <a
            href={process.env.PUBLIC_URL + path}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={icon}></i>
        </a>
    );
};

SocialIcon.propTypes = {
    path: PropTypes.string,
    icon: PropTypes.string,
};

export default SocialIcon;
