import PropTypes from "prop-types";

const AboutAddress = ({ data }) => {
    return (
        <div className="office-address-item">
            <h5>{data.title}</h5>
            <ul>
                {data.list.map((single, i) => {
                    return <li key={i}>{single}</li>;
                })}
            </ul>
        </div>
    );
};

AboutAddress.propTypes = {
    data: PropTypes.object,
};

export default AboutAddress;
