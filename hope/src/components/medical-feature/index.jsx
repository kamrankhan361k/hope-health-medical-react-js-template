import PropTypes from "prop-types";

const MedicalFeature = ({ data }) => {
    return (
        <div className="icon-box-item">
            <div className="icon">
                <i className={data.icon}></i>
            </div>
            <div className="content">
                <h5 className="title">{data.title}</h5>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

MedicalFeature.propTypes = {
    data: PropTypes.object,
};

export default MedicalFeature;
