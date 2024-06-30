import { useContext, useRef, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { slideUp, slideDown } from "../../utils";
import { AccordionContext } from "./context";

const AccordionContent = ({ children, id }) => {
    const { activeId, isInit } = useContext(AccordionContext);
    const isActive = id === activeId ? true : false;
    const ref = useRef(null);

    useEffect(() => {
        if (isInit && isActive) slideDown(ref.current);
        if (!isInit) {
            if (isActive) {
                slideDown(ref.current);
            } else {
                slideUp(ref.current);
            }
        }
    }, [activeId, isInit, isActive]);

    return (
        <div ref={ref} className="accordion-content">
            {children}
        </div>
    );
};

AccordionContent.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default memo(AccordionContent);
