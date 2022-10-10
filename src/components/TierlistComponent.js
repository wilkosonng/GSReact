import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup, UncontrolledAccordion, AccordionHeader, AccordionItem, AccordionBody } from 'reactstrap';
import { getUnits } from '../shared/unitInfo';
import { Default, Mobile } from './MobileCheckComponent';

const cardHeaderColor = {
    backgroundColor: "#22bbff", 
    color: "#292930"
}

const accordionColor = {
    backgroundColor: "#2e2e2e", 
    color: "#e7f9fc", 
    padding: "0"
}

export default function Tierlist() {
    //Obtain Unit Data
    const units = getUnits();
    
    return (
        <Container style={{marginTop: "5rem"}}>
            <DisplayHeader />
            <Row>
                <DisplayAccordion unit={units} />
            </Row>
        </Container>
    )
}

function DisplayHeader(){
    return (
        <Row>
            <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                <CardHeader>
                    <h1><center><strong>Global Tierlist</strong></center></h1>
                </CardHeader>
                <CardBody>
                        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                            <CardHeader style={cardHeaderColor}>
                                <center><h4>LEGEND</h4></center>
                            </CardHeader>
                            <CardBody>
                                <center>
                                    <p><img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px"}} alt="True Weapon is Favorable for Unit" /> True Weapon Favorability (Bumped up 0-2 Subtiers)</p>
                                    <p><img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px"}} alt="Unit is reliant on True Weapon" /> True Weapon Reliance (Bumped up 2+ subtiers)</p>
                                    <p><img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px"}} alt="Unit has a useful Cross Art with another unit" /> Notable Cross Arts Synergy</p>
                                </center>
                            </CardBody>
                        </Card>
                        <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                            <CardHeader style={cardHeaderColor}>
                                <center><h4>NOTE</h4></center>
                            </CardHeader>
                            <CardBody>
                                <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. Each unit may have their own niche, even the lower ranking units</center></p>
                                <p><center>This is simply meant to show the general analysis of each unit. </center></p>
                                <p><center>Rankings were determined by players from the Grand Summoners <a href="https://discord.gg/grandsummoners">Official Discord</a> Server Staff.</center></p>
                            </CardBody>
                        </Card>
                </CardBody>
            </Card>
        </Row>
    )
}

function DisplayAccordion({unit}) {
    const desktopWidth = "75px";
    const mobileWidth = "60px";
    const desktopFont = "15px";
    const mobileFont = "12px";

    return (
        <UncontrolledAccordion flush defaultOpen={["SSS", "SS", "S", "A+", "A", "A-", "B+", "B", "B-", "C", "F", "TBD"]} stayOpen style={{marginTop: "3rem", width: "100%"}}>
            <AccordionHeader targetId="SSS" >
                <h1><strong>SSS</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="SSS" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "SSS" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SSS" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SSS" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SSS" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SSS" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "SSS" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SSS" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SSS" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SSS" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SSS" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="SS">
                <h1><strong>SS</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="SS" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "SS" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SS" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SS" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SS" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "SS" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "SS" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SS" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SS" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SS" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "SS" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="S">
                <h1><strong>S</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="S" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "S" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "S" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "S" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "S" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "S" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "S" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "S" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "S" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "S" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "S" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="A+">
                <h1><strong>A+</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="A+" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "A+" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A+" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A+" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A+" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A+" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "A+" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A+" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A+" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A+" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A+" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="A">
                <h1><strong>A</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="A" style={accordionColor}>
                    <CardGroup style={{padding: "0px", margin: "0px"}}>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "A" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "A" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return 
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="A-">
                <h1><strong>A-</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="A-" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "A-" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A-" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A-" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A-" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "A-" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "A-" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A-" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A-" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A-" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "A-" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="B+">
                <h1><strong>B+</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="B+" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "B+" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B+" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B+" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B+" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B+" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "B+" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B+" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B+" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B+" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B+" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="B">
                <h1><strong>B</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="B" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "B" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "B" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="B-">
                <h1><strong>B-</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="B-" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "B-" && units.attribute === "Fire"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B-" && units.attribute === "Earth"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B-" && units.attribute === "Water"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B-" && units.attribute === "Light"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "B-" && units.attribute === "Dark"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "B-" && units.attribute === "Fire"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B-" && units.attribute === "Earth"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B-" && units.attribute === "Water"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B-" && units.attribute === "Light"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "B-" && units.attribute === "Dark"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="C">
                <h1><strong>C</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="C" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "C" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "C" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "C" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "C" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "C" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "C" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "C" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "C" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "C" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "C" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="F">
                <h1><strong>F</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="F" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "F" && units.attribute === "Fire"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "F" && units.attribute === "Earth"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "F" && units.attribute === "Water"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "F" && units.attribute === "Light"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "F" && units.attribute === "Dark"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "F" && units.attribute === "Fire"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "F" && units.attribute === "Earth"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "F" && units.attribute === "Water"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "F" && units.attribute === "Light"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "F" && units.attribute === "Dark"){
                                        if (units.image.thumbawk) {
                                            return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                            )
                                        }
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayFiveStar unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
            <AccordionHeader targetId="TBD">
                <h1><strong>TBD</strong></h1>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="TBD" style={accordionColor}>
                    <CardGroup>
                        <Default>
                            {unit.map(units => {
                                if(units.rank === "TBD" && units.attribute === "Fire"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "TBD" && units.attribute === "Earth"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "TBD" && units.attribute === "Water"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "TBD" && units.attribute === "Light"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                            {unit.map(units => {
                                if(units.rank === "TBD" && units.attribute === "Dark"){
                                    return (
                                        <DisplayUnit unit={units} imageSize={desktopWidth} fontSizing={desktopFont}/>
                                    )
                                }
                                return ""
                            })}
                        </Default>
                        <Mobile>
                            <Container>
                                <Row>
                                {unit.map((units) => {
                                    if(units.rank === "TBD" && units.attribute === "Fire"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "TBD" && units.attribute === "Earth"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "TBD" && units.attribute === "Water"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "TBD" && units.attribute === "Light"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                {unit.map((units) => {
                                    if(units.rank === "TBD" && units.attribute === "Dark"){
                                        return (
                                            <>
                                                <Col xs="4">
                                                    <DisplayUnit unit={units} imageSize={mobileWidth} fontSizing={mobileFont}/>
                                                </Col>
                                            </>
                                        )
                                    }
                                    return ""
                                })}
                                </Row>
                            </Container>
                        </Mobile>
                    </CardGroup>
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>

    )
}



function DisplayUnit({unit, imageSize, fontSizing}) {

    const thumbnailSize = {
        height: "100%",
        width: `${imageSize}`,
        maxWidth: "75px",
        margin: "0px",
        padding: "0px"
    };
    if(unit.twrequire){
        if(unit.twrequire === "reliance"){
            return (
                <center>
                    <Card style={{border: "none", width: "90px", backgroundColor: "#2e2e2e", padding: "0px", margin: "0px"}}>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            <br />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px"}}>
                                {unit.name}
                            </p>
                            <img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="Unit is relaint on true weapon"/>
                        </a>
                    </Card>
                </center>
            )
        }
        if(unit.name === "Luahn") {
            return (
                <center>
                    <Card style={{border: "none", width: "90px", backgroundColor: "#2e2e2e", padding: "0px", margin: "0px"}}>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                            <br />
                            <p style={{marginBottom: "0px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px"}}>{unit.name}</p>
                            <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="True Weapon is favorable for unit" />
                            <img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} alt="Unit has notable cross arts synergy with another unit" />
                        </a>
                    </Card>
                </center>
            )
        }

        return (
            <center>
                <Card style={{border: "none", width: "90px", backgroundColor: "#2e2e2e", padding: "0px", margin: "0px"}}>
                    <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" alt={unit.name} />
                        <br />
                        <p style={{paddingTop: "0px", marginTop: "0px", marginBottom: "0px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px"}}>{unit.name}</p>
                        <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "2rem"}} alt="True Weapon is favorable for unit" />
                    </a>
                </Card>
            </center>
        )
    }

    return (
        <center>
            <Card style={{border: "none", width: "90px", backgroundColor: "#2e2e2e", padding: "0px" , margin: "0px"}}>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumbawk} style={thumbnailSize}  />
                    <p style={{paddingBottom: "0px", marginBottom: "2px", color: "#aaabb8", fontSize: `${fontSizing}`, width: "75px"}}>{unit.name}</p>
                </a>
            </Card>
        </center>
    )
}

//If Unit does not have Awk
function DisplayFiveStar({unit, imageSize, fontSizing}) {
    const thumbnailSize = {
        height: "100%",
        width: `${imageSize}`,
        maxWidth: "75px",
        margin: "0px",
        padding: "0px"
    };

    //No TW favorability
    return (
        <Col md="auto" xs="4">
        <Card style={{border: "none", width: "90px", backgroundColor: "#2e2e2e"}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumb5} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "0px", marginBottom: "2px", color: "#aaabb8", width: "75px", fontSize: `${fontSizing}`}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}
