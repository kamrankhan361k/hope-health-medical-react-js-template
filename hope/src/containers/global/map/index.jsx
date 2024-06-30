import GoogleMap from "../../../components/map";
import PropTypes from "prop-types";

const GoogleMapContainer = ({ classOption }) => {
    return (
        <div className={`map-area ${classOption}`}>
            <GoogleMap />
        </div>
    );
};

GoogleMapContainer.propTypes = {
    classOption: PropTypes.string,
};

GoogleMapContainer.defaultProps = {
    classOption: "map-area",
};

export default GoogleMapContainer;
