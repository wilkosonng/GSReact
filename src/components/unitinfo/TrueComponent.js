import { Container, Row, Col, Badge, Media, NavItem, NavLink, Nav, TabContent, TabPane, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import React, { useState } from 'react';

const imageSize ={
    maxHeight: "400px",
    maxWidth: "400px"
};

const trueCard = {
    marginTop: "3rem",
    paddingTop: "10px",
    backgroundColor: "#464866",
    color: "#aaabb8",
    borderColor: "#464866"
}

export function RenderTrue({unitTrue}) {
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    //TODO: Fix Tabs so active is properly showing
    //Check if True Weapon Exists
    if(unitTrue.trueweapon){
        //Three TWs (2 Passive each)
        if(unitTrue.trueweapon.true3) {
            return (
                <React.Fragment>
                    <Card style={trueCard}>
                        <CardHeader>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className="active"
                                        onClick={() => {toggle('1')}} >
                                            <Media src={unitTrue.trueweapon.true1.thumb} object-fit="cover" id="unitTrue"/>
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className=""
                                        onClick={() => {toggle('2')}} >
                                            <Media src={unitTrue.trueweapon.true2.thumb} object-fit="cover" id="unitTrue"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className=""
                                        onClick={() => {toggle('3')}} >
                                            <Media src={unitTrue.trueweapon.true3.thumb} object-fit="cover" id="unitTrue"/>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardHeader>
                        <TabContent activeTab={currentTab}>
                            <TabPane tabId="1">
                                <Container>
                                    <Row>
                                        <CardTitle>
                                            <center><Media src={unitTrue.trueweapon.true1.detail} style={imageSize} /></center>
                                            <center><strong><h1><Media src={unitTrue.trueweapon.true1.slot} />{unitTrue.trueweapon.true1.name}<Media src={unitTrue.trueweapon.true1.slot} /></h1></strong></center>
                                        </CardTitle>
                                        <CardBody>
                                            <Col>
                                                <h3><strong>SKILL</strong></h3>
                                                <p><Badge color="secondary">BREAK {unitTrue.trueweapon.true1.skillbreak}</Badge> {unitTrue.trueweapon.true1.skill} </p>
                                            </Col>
                                            <Col>
                                                <p><h3><strong>PASSIVE</strong></h3>
                                                    <ul>
                                                        <li>{unitTrue.trueweapon.true1.passive.ability1}</li>
                                                        <li>{unitTrue.trueweapon.true1.passive.ability2}</li>
                                                    </ul>
                                                </p>
                                            </Col>
                                        </CardBody>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId="2">
                                <Container>
                                    <Row>
                                        <CardTitle>
                                            <center><Media src={unitTrue.trueweapon.true2.detail} style={imageSize} /></center>
                                            <center><strong><h1><Media src={unitTrue.trueweapon.true2.slot} />{unitTrue.trueweapon.true2.name}<Media src={unitTrue.trueweapon.true2.slot} /></h1></strong></center>
                                        </CardTitle>
                                        <CardBody>
                                            <Col>
                                                <h3><strong>SKILL</strong></h3>
                                                <p><Badge color="secondary">BREAK {unitTrue.trueweapon.true2.skillbreak}</Badge> {unitTrue.trueweapon.true2.skill} </p>
                                            </Col>
                                            <Col>
                                                <p><h3><strong>PASSIVE</strong></h3>
                                                    <ul>
                                                        <li>{unitTrue.trueweapon.true2.passive.ability1}</li>
                                                        <li>{unitTrue.trueweapon.true2.passive.ability2}</li>
                                                    </ul>
                                                </p>
                                            </Col>
                                        </CardBody>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId="3">
                                <Container>
                                    <Row>
                                        <CardTitle>
                                            <center><Media src={unitTrue.trueweapon.true3.detail} style={imageSize} /></center>
                                            <center><strong><h1><Media src={unitTrue.trueweapon.true3.slot} />{unitTrue.trueweapon.true3.name}<Media src={unitTrue.trueweapon.true3.slot} /></h1></strong></center>
                                        </CardTitle>
                                        <CardBody>
                                            <Col>
                                                <h3><strong>SKILL</strong></h3>
                                                <p><Badge color="secondary">BREAK {unitTrue.trueweapon.true3.skillbreak}</Badge> {unitTrue.trueweapon.true3.skill} </p>
                                            </Col>
                                            <Col>
                                                <p><h3><strong>PASSIVE</strong></h3>
                                                    <ul>
                                                        <li>{unitTrue.trueweapon.true3.passive.ability1}</li>
                                                        <li>{unitTrue.trueweapon.true3.passive.ability2}</li>
                                                    </ul>
                                                </p>
                                            </Col>
                                        </CardBody>
                                    </Row>
                                </Container>
                            </TabPane>
                        </TabContent>
                    </Card>
                </React.Fragment>
            )
        }

        //Two TWs (2 Passive each)
        if(unitTrue.trueweapon.true2) {
            return (
                <React.Fragment>
                    <Card style={trueCard}>
                        <CardHeader>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className="active"
                                        onClick={() => {toggle('1')}} >
                                            <Media src={unitTrue.trueweapon.true1.thumb} object-fit="cover" id="unitTrue"/>
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className=""
                                        onClick={() => {toggle('2')}} >
                                            <Media src={unitTrue.trueweapon.true2.thumb} object-fit="cover" id="unitTrue"/>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </CardHeader>
                        <TabContent activeTab={currentTab}>
                            <TabPane tabId="1">
                                <Container>
                                    <Row>
                                        <CardTitle>
                                            <center><Media src={unitTrue.trueweapon.true1.detail} style={imageSize} /></center>
                                            <center><strong><h1><Media src={unitTrue.trueweapon.true1.slot} />{unitTrue.trueweapon.true1.name}<Media src={unitTrue.trueweapon.true1.slot} /></h1></strong></center>
                                        </CardTitle>
                                        <CardBody>
                                            <Col>
                                                <h3><strong>SKILL</strong></h3>
                                                <p><Badge color="secondary">BREAK {unitTrue.trueweapon.true1.skillbreak}</Badge> {unitTrue.trueweapon.true1.skill} </p>
                                            </Col>
                                            <Col>
                                                <p><h3><strong>PASSIVE</strong></h3>
                                                    <ul>
                                                        <li>{unitTrue.trueweapon.true1.passive.ability1}</li>
                                                        <li>{unitTrue.trueweapon.true1.passive.ability2}</li>
                                                    </ul>
                                                </p>
                                            </Col>
                                        </CardBody>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId="2">
                                <Container>
                                    <Row>
                                        <CardTitle>
                                            <center><Media src={unitTrue.trueweapon.true2.detail} style={imageSize} /></center>
                                            <center><strong><h1><Media src={unitTrue.trueweapon.true2.slot} />{unitTrue.trueweapon.true2.name}<Media src={unitTrue.trueweapon.true2.slot} /></h1></strong></center>
                                        </CardTitle>
                                        <CardBody>
                                            <Col>
                                                <h3><strong>SKILL</strong></h3>
                                                <p><Badge color="secondary">BREAK {unitTrue.trueweapon.true2.skillbreak}</Badge> {unitTrue.trueweapon.true2.skill} </p>
                                            </Col>
                                            <Col>
                                                <p><h3><strong>PASSIVE</strong></h3>
                                                    <ul>
                                                        <li>{unitTrue.trueweapon.true2.passive.ability1}</li>
                                                        <li>{unitTrue.trueweapon.true2.passive.ability2}</li>
                                                    </ul>
                                                </p>
                                            </Col>
                                        </CardBody>
                                    </Row>
                                </Container>
                            </TabPane>
                        </TabContent>
                    </Card>
                </React.Fragment>
            )
        }

        //2 Passives
        if(unitTrue.trueweapon.passive.ability2){
            return (
                <Container>
                    <Card style={trueCard}>
                        <Row>
                            <CardHeader>
                                <center><Media src={unitTrue.trueweapon.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.trueweapon.slot} />{unitTrue.trueweapon.name}<Media src={unitTrue.slot} /></h1></strong></center>
                            </CardHeader>
                            <CardBody>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.trueweapon.skillbreak}</Badge> {unitTrue.trueweapon.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.trueweapon.passive.ability1}</li>
                                            <li>{unitTrue.trueweapon.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </CardBody>
                        </Row>
                    </Card>
                </Container>
            )
        } 

        //Just 1 Passive
        if(unitTrue.trueweapon.passive.ability1){
            return (
                <Container>
                    <Card style={trueCard}>
                        <Row>
                            <CardHeader>
                                <center><Media src={unitTrue.trueweapon.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.trueweapon.slot} />{unitTrue.trueweapon.name}<Media src={unitTrue.slot} /><Media src={unitTrue.trueweapon.slot} /></h1></strong></center>
                            </CardHeader>
                            <CardBody>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.trueweapon.skillbreak}</Badge> {unitTrue.trueweapon.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.trueweapon.passive.ability1}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </CardBody>
                        </Row>
                    </Card>
                </Container>
            )
        } 
    }
    

    //If Trueweapon is missing
    return (
            <Container>
                <Card style={trueCard}>
                    <center><h1>This unit does not have a True Weapon</h1></center>
                </Card>
            </Container>
        )
    
}