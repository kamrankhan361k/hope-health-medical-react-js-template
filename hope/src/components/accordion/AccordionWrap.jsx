import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accordion";

const AccordionWrap = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    Can I Get A Divorce Without A Consultant?
                </AccordionTitle>
                <AccordionContent id="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur consectetur elit lacinia ornare. In volutpat
                    rutrum molestie. Vivamus efficitur orci, ac gravida eros
                    bibendum non. Nullam auctor varius fer vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitle id="two">
                    I Have A Technical Problem Or Support Issue I Need Resolved,
                    Who Do I Email?
                </AccordionTitle>
                <AccordionContent id="two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur consectetur elit lacinia ornare. In volutpat
                    rutrum molestie. Vivamus efficitur orci, ac gravida eros
                    bibendum non. Nullam auctor varius fer vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="three">
                <AccordionTitle id="three">
                    What Other Services Are You Compatible With?
                </AccordionTitle>
                <AccordionContent id="three">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur consectetur elit lacinia ornare. In volutpat
                    rutrum molestie. Vivamus efficitur orci, ac gravida eros
                    bibendum non. Nullam auctor varius fer vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="four">
                <AccordionTitle id="four">Are You Hiring?</AccordionTitle>
                <AccordionContent id="four">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur consectetur elit lacinia ornare. In volutpat
                    rutrum molestie. Vivamus efficitur orci, ac gravida eros
                    bibendum non. Nullam auctor varius fer vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrap;
