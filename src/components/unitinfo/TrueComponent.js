import { Container, Row, Col, Badge, Media, NavItem, NavLink, Nav, TabContent, TabPane } from 'reactstrap';

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

export function RenderTrue({unitTrue}) {
    //Tab for True Weapon
    //Add if statements to check to Passives based on amount (1 Passive)
    //Add if statements to check multiple true weapons and create tabs based on number https://www.geeksforgeeks.org/reactjs-reactstrap-tab-component/
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    //Three TWs (2 Passive each)
    if(unitTrue.true3) {
        return (
            <React.Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink className="active"
                            onClick={() => {toggle('1')}} >
                                <Media src={unitTrue.true1.thumb} object-fit="cover" id="unitTrue"/>
                        </NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className=""
                            onClick={() => {toggle('2')}} >
                                <Media src={unitTrue.true2.thumb} object-fit="cover" id="unitTrue"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className=""
                            onClick={() => {toggle('3')}} >
                                <Media src={unitTrue.true3.thumb} object-fit="cover" id="unitTrue"/>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab}>
                    <TabPane tabId="1">
                        <Container>
                            <Row>
                                <center><Media src={unitTrue.true1.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.true1.slot} />{unitTrue.true1.name}<Media src={unitTrue.true1.slot} /></h1></strong></center>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.true1.skillbreak}</Badge> {unitTrue.true1.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.true1.passive.ability1}</li>
                                            <li>{unitTrue.true1.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tabId="2">
                        <Container>
                            <Row>
                                <center><Media src={unitTrue.true2.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.true2.slot} />{unitTrue.true2.name}<Media src={unitTrue.true2.slot} /></h1></strong></center>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.true2.skillbreak}</Badge> {unitTrue.true2.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.true2.passive.ability1}</li>
                                            <li>{unitTrue.true2.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tabId="3">
                        <Container>
                            <Row>
                                <center><Media src={unitTrue.true3.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.true3.slot} />{unitTrue.true3.name}<Media src={unitTrue.true3.slot} /></h1></strong></center>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.true3.skillbreak}</Badge> {unitTrue.true3.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.true3.passive.ability1}</li>
                                            <li>{unitTrue.true3.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        )
    }

    //Two TWs (2 Passive each)
    if(unitTrue.true2) {
        return (
            <React.Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink className="active"
                            onClick={() => {toggle('1')}} >
                                <Media src={unitTrue.true1.thumb} object-fit="cover" id="unitTrue"/>
                        </NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink className=""
                            onClick={() => {toggle('2')}} >
                                <Media src={unitTrue.true2.thumb} object-fit="cover" id="unitTrue"/>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab}>
                    <TabPane tabId="1">
                        <Container>
                            <Row>
                                <center><Media src={unitTrue.true1.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.true1.slot} />{unitTrue.true1.name}<Media src={unitTrue.true1.slot} /></h1></strong></center>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.true1.skillbreak}</Badge> {unitTrue.true1.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.true1.passive.ability1}</li>
                                            <li>{unitTrue.true1.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                    <TabPane tabId="2">
                        <Container>
                            <Row>
                                <center><Media src={unitTrue.true2.detail} style={imageSize} /></center>
                                <center><strong><h1><Media src={unitTrue.true2.slot} />{unitTrue.true2.name}<Media src={unitTrue.true2.slot} /></h1></strong></center>
                                <Col>
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="secondary">BREAK {unitTrue.true2.skillbreak}</Badge> {unitTrue.true2.skill} </p>
                                </Col>
                                <Col>
                                    <p><h3><strong>PASSIVE</strong></h3>
                                        <ul>
                                            <li>{unitTrue.true2.passive.ability1}</li>
                                            <li>{unitTrue.true2.passive.ability2}</li>
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </TabPane>
                </TabContent>
            </React.Fragment>
        )
    }

    //2 Passives
    if(unitTrue.trueweapon.passive.ability2){
        return (
            <Container>
                <Row>
                    <center><Media src={unitTrue.trueweapon.detail} style={imageSize} /></center>
                    <center><strong><h1><Media src={unitTrue.trueweapon.slot} />{unitTrue.trueweapon.name}<Media src={unitTrue.slot} /></h1></strong></center>
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
                </Row>
            </Container>
        )
    } 

    //Just 1 Passive
    if(unitTrue.trueweapon.passive.ability1){
        return (
            <Container>
                <Row>
                    <center><Media src={unitTrue.trueweapon.detail} style={imageSize} /></center>
                    <center><strong><h1><Media src={unitTrue.trueweapon.slot} />{unitTrue.trueweapon.name}<Media src={unitTrue.slot} /></h1></strong></center>
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
                </Row>
            </Container>
        )
    } 

    //If Trueweapon is missing
    return (
            <Container>
                <center><h1>This unit does not have a True Weapon</h1></center>
            </Container>
        )
    
}