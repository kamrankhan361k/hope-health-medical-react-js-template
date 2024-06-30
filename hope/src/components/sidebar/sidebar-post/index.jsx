import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SidebarPost = ({ data }) => {
    return (
        <div className="widget-blog-post">
            <ul>
                {data.map((single, i) => {
                    return (
                        <li key={i}>
                            <div className="thumb">
                                <img
                                    src={`${process.env.PUBLIC_URL}/${single.media.rcImage}`}
                                    alt="hope-Blog"
                                />
                            </div>
                            <div className="content">
                                <Link
                                    to={
                                        process.env.PUBLIC_URL +
                                        `/blog-details/${single.id}`
                                    }
                                >
                                    {single.title}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

SidebarPost.propTypes = {
    data: PropTypes.array,
};

export default SidebarPost;
