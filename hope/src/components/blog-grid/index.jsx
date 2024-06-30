import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const BlogGrid = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link
                className="category"
                to={process.env.PUBLIC_URL + `/category/${slugify(value)}`}
                key={i}
            >
                {value}
                {i !== data.categories.length - 1 && ","}
            </Link>
        );
    });
    return (
        <div className="post-item">
            <div className="thumb">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/${data.media.gridImage}`}
                        alt="hope-Blog"
                    />
                </Link>
            </div>
            <div className="content">
                {cate}
                <h4 className="title">
                    <Link
                        to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h4>
            </div>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
};

export default BlogGrid;
