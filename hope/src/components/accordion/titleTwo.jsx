import { useContext } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./context";

const AccordionTitleTwo = ({ children, id }) => {
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
                <i className="icon-add icon-plus icofont-plus"></i>
            </span>
            <span className="icon opened">
                <i className="icon-remove icon-minus icofont-minus"></i>
            </span>
            <span className="accordion-title">{children}</span>
        </div>
    );
};

AccordionTitleTwo.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AccordionTitleTwo;
