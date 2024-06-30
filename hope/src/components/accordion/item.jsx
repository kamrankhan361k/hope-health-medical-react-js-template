import {
    useContext,
    useEffect,
    Children,
    isValidElement,
    cloneElement,
} from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./context";

const AccordionItem = ({ children, id }) => {
    const { setIdsOnInit, activeId } = useContext(AccordionContext);

    useEffect(() => {
        if (!setIdsOnInit) return;
        setIdsOnInit(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const childrenWithProps = Children.map(children, (child) => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const props = { id, activeId };
        if (isValidElement(child)) {
            return cloneElement(child, props);
        }
        return child;
    });

    return (
        <div className="accordion-item" id={id}>
            {childrenWithProps}
        </div>
    );
};

AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AccordionItem;
