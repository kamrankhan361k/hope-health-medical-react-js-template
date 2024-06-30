import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const BlogListItem = ({ data }) => {
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
                        src={`${process.env.PUBLIC_URL}/${data.media.mediumImage}`}
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
                <div className="meta">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/date/${slugify(data.date)}`
                        }
                    >
                        {data.date}
                    </Link>
                    <span>by</span>
                    <Link
                        className="author"
                        to={
                            process.env.PUBLIC_URL +
                            `/author/${slugify(data.author)}`
                        }
                    >
                        {data.author}
                    </Link>
                </div>
            </div>
        </div>
    );
};

BlogListItem.propTypes = {
    data: PropTypes.object,
};

export default BlogListItem;
