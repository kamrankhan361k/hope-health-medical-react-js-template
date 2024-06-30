import PropTypes from "prop-types";

const SectionTitle = ({ subTitle, title, classOption }) => {
    return (
        <div className={`section-title ${classOption}`} data-aos="fade-up">
            <p>{subTitle}</p>
            <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string,
};

SectionTitle.defaultProps = {
    classOption: "section-title",
};

export default SectionTitle;
