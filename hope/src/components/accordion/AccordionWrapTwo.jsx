import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitleTwo,
    AccordionContent,
} from "../accordion";

const AccordionWrapTwo = () => {
    return (
        <Accordion>
            <AccordionItem id="one">
                <AccordionTitleTwo id="one">
                    What causes tooth decay?
                </AccordionTitleTwo>
                <AccordionContent id="one">
                    Decay is caused by bacteria that collect on teeth and feed
                    on the carbohydrates in our diet. The bacteria produce acid
                    that wears away at the enamel on our teeth. If decay is left
                    untreated, it can cause pain, infection and even tooth loss.
                    Protect your teeth against decay by brushing at least twice
                    a day, flossing daily, visiting your dentist regularly.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitleTwo id="two">
                    What is dry mouth and what can I do about it?
                </AccordionTitleTwo>
                <AccordionContent id="two">
                    Decay is caused by bacteria that collect on teeth and feed
                    on the carbohydrates in our diet. The bacteria produce acid
                    that wears away at the enamel on our teeth. If decay is left
                    untreated, it can cause pain, infection and even tooth loss.
                    Protect your teeth against decay by brushing at least twice
                    a day, flossing daily, visiting your dentist regularly.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="three">
                <AccordionTitleTwo id="three">
                    How often should I change my toothbrush?
                </AccordionTitleTwo>
                <AccordionContent id="three">
                    Decay is caused by bacteria that collect on teeth and feed
                    on the carbohydrates in our diet. The bacteria produce acid
                    that wears away at the enamel on our teeth. If decay is left
                    untreated, it can cause pain, infection and even tooth loss.
                    Protect your teeth against decay by brushing at least twice
                    a day, flossing daily, visiting your dentist regularly.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="four">
                <AccordionTitleTwo id="four">
                    How often should I see a dentist?
                </AccordionTitleTwo>
                <AccordionContent id="four">
                    Decay is caused by bacteria that collect on teeth and feed
                    on the carbohydrates in our diet. The bacteria produce acid
                    that wears away at the enamel on our teeth. If decay is left
                    untreated, it can cause pain, infection and even tooth loss.
                    Protect your teeth against decay by brushing at least twice
                    a day, flossing daily, visiting your dentist regularly.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrapTwo;
