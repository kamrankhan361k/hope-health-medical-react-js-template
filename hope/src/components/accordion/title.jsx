import { useContext } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./context";

const AccordionTitle = ({ children, id }) => {
    const { toggleActive, activeId, setIsInit } = useContext(AccordionContext);

    const clickHandler = () => {
        if (!toggleActive || !id || !setIsInit) return;
        setIsInit(false);
        toggleActive(id);
    };
    const isActive = id === activeId ? true : false;

    return (
        <div
            aria-hidden="true"
            className={`accordion-header ${isActive ? "active" : ""}`}
            type="button"
            onClick={clickHandler}
        >
            <span className="icon closed">
                <i className="icon-add icon-plus icofont-thin-down"></i>
            </span>
            <span className="icon opened">
                <i className="icon-remove icon-minus icofont-close-line"></i>
            </span>
            <span className="title">{children}</span>
        </div>
    );
};

AccordionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AccordionTitle;
