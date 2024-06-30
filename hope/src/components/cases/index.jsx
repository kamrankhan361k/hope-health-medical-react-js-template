import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CasesItem = ({ data }) => {
    return (
        <div className="case-item">
            <div className="thumb">
                <img
                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                    alt="Hope"
                />
            </div>
            <div className="content">
                <h5 className="name">
                    <Link to="/">{data.name}</Link>
                </h5>
                <h6 className="category">{data.department}</h6>
            </div>
        </div>
    );
};

CasesItem.propTypes = {
    data: PropTypes.object,
};

export default CasesItem;
