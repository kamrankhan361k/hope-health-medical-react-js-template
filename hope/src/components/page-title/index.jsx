import PropTypes from "prop-types";

const PageTitle = ({ subTitle, title }) => {
    return (
        <div className="page-title-content content-style2 text-center">
            <p>{subTitle}</p>
            <h4
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h4>
        </div>
    );
};

PageTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
};

export default PageTitle;
