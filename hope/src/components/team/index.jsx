import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Team = ({ data }) => {
    return (
        <div className="team-member">
            <div className="thumb">
                <img
                    src={process.env.PUBLIC_URL + data.image}
                    alt="hope-HasTech"
                />
            </div>
            <div className="content">
                <div className="member-info">
                    <h4 className="name">{data.name}</h4>
                    <p>{data.excerpt}</p>
                    <Link to="/" className="btn-link">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
