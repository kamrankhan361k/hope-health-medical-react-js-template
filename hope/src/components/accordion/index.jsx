import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AccordionItem from "./item";
import AccordionTitle from "./title";
import AccordionTitleTwo from "./titleTwo";
import AccordionContent from "./content";
import { AccordionContext } from "./context";

const Accordion = ({ children, classOption }) => {
    const [ids, setIds] = useState([]);
    const [activeId, setActiveId] = useState("");
    const [isInit, setIsInit] = useState(true);

    const toggleActive = (id) => {
        if (id === activeId) {
            setActiveId("");
        } else {
            setActiveId(id);
        }
    };

    const setIdsOnInit = (id) => {
        setIds((ids) => [...ids, id]);
    };

    const setActiveIdOnInit = () => {
        if (!activeId) setActiveId(ids[0]);
    };

    useEffect(() => {
        setActiveIdOnInit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids.length]);

    return (
        <AccordionContext.Provider
            value={{
                ids,
                setIds,
                activeId,
                setActiveId,
                toggleActive,
                setIdsOnInit,
                isInit,
                setIsInit,
            }}
        >
            <div className={`accordion ${classOption}`}>{children}</div>
        </AccordionContext.Provider>
    );
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    classOption: PropTypes.string,
};
Accordion.defaultProps = {
    classOption: "accordion",
};

export { AccordionItem, AccordionTitle, AccordionTitleTwo, AccordionContent };

export default Accordion;
