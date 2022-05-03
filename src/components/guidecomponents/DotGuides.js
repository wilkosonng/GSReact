import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionBody, Card } from 'reactstrap';

const accordionColor = {
    backgroundColor: "#464866", color: "#aaabb8"
}

export default function DotGuide() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }

    return (
        <Card style={{backgroundColor: "#29648a", color: "aaabb8"}}>
            
        </Card>
    )
}