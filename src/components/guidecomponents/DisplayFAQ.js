import React, { useState } from 'react';
import { Col, Container, Row, Accordion, AccordionHeader, AccordionItem, AccordionBody, Card } from 'reactstrap';

export default function FAQGuide () {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }

    //Change Accordion Content Color 
    //https://docs.google.com/document/d/1puFaDPDto9fra06t9P31AWBPUSJurGpUiBg9jsHaiG4/edit#
    //TODO: Figure out how to change overall accordion color, including Header
    const accordionColor = {
        backgroundColor: "gray"
    }
    return (
    <Card style={{backgroundColor: "gray"}}>
        <h2><center>Getting Started</center></h2>
        <Accordion flush open={accordion} toggle={toggle}>
            <AccordionHeader targetId="1">
                <p>Q01. How do I download Grand Summoners?</p>
            </AccordionHeader>
            <AccordionItem accordionId="1" >
                <AccordionBody style={accordionColor}>
                <p>You can download Grand Summoners from the relevant App Store for your device, or from downloading a .apk for the current update. 
                    If Grand Summoners is not available in your country, you can use <a href="https://www.qoo-app.com/en">QooApp</a> as a workaround.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="2">
                <p>Q02. Do I need to reroll to play this game? If so, how?</p>
            </AccordionHeader>
            <AccordionItem >
                <AccordionBody accordionId="2" style={accordionColor}>
                    <p>While rerolling is not necessary to progress in Grand Summoners, taking the time to reroll and having strong units to start off with will make the early-game experience much more bearable and also opens up late-game content a lot sooner. 
            There is a guide for how to reroll effectively <a href="https://www.reddit.com/r/grandsummoners/comments/8vxrn4/how_to_reroll_using_nox_or_other_android_emulators/">here</a>; 
            while it gives specific steps for rerolling using Nox and other Android emulators, the reroll process is still outlined in the post. 
            It should be noted that specific “reroll advice” (i.e. Units/equipment to reroll for) changes periodically based on currently ongoing limited-run units and events.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="3">
            Q03. Which Starter should I choose?
            </AccordionHeader>
            <AccordionItem >
                <AccordionBody accordionId="3" style={accordionColor}>
                The Starters (also sometimes referred to as the Blademasters) are more-or-less the same as each other: 
                a high-damage unit with a specific gimmick depending on the Starter. Arth, the Earth Starter, has high BREAK values in his Skills and Arts. 
                Corsair, the Water Starter, can inflict Freeze on enemies with many of her attacks. Clyde, the Fire Starter, can inflict Burn on enemies with many of 
                his attacks.
                <br /> <br/>
                On the subject of which starter you should choose, the general consensus is that Corsair 
                is the best choice, as Freeze is one of the more useful status ailments in the game as it 
                can stop most enemy attacks, potentially saving your party.
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </Card>
    )
    
}

//Component to display FAQ