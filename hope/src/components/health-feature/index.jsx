import PropTypes from "prop-types";

const HealthFeature = ({ data }) => {
    return (
        <div className="media">
            <div className="media-body">
                <h4 className="title">{data.title}</h4>
                <p>{data.subTitle}</p>
            </div>
            <span className={data.icon}></span>
        </div>
    );
};

HealthFeature.propTypes = {
    data: PropTypes.object,
};

export default HealthFeature;
