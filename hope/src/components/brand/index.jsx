import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="brand-logo-item">
            <Link to="/">
                <img
                    src={process.env.PUBLIC_URL + data.image}
                    alt="hope-Brand-Logo"
                />
            </Link>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
