import React, { useState } from 'react';
import { Container, Row, Col, Media, Badge, Table, Nav, NavItem, TabContent, TabPane, NavLink } from 'reactstrap';

const lbIconSize = {
    maxHeight: 40,
    maxWidth: 40
}

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

export function RenderStats({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots, unitImage}){
    //Tab for Stats
    //Possibly make if else statements to check if ability3 exists
    //TODO: Work on Viewports, Command for Duke

    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }
    //Check if 3rd passive exists
    if(unitPassive.ability3){

            //Check if Liberation Mode exists
            if(unitSkill.liberation) {
                return (
                    //Create tabs for Human and Liberation
                    <React.Fragment>
                        <Nav tabs>
                            <NavItem>
                                <NavLink className="active"
                                    onClick={() => {toggle('1')}} >
                                        <Media src={unitImage.thumbawk} object-fit="cover" id="unitName"/>
                                </NavLink>
                                
                            </NavItem>
                            <NavItem>
                                <NavLink className=""
                                    onClick={() => {toggle('2')}} >
                                        <Media src={unitImage.liberation} object-fit="cover" id="unitName"/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={currentTab}>
                            <TabPane tabId="1">
                                <HumanMode unitName={unitName} unitStats={unitStats} unitAtt={unitAtt} 
                                    unitType={unitType} unitSkill={unitSkill} unitPassive={unitPassive} unitSlots={unitSlots} unitImage={unitImage.detailawk}/>
                            </TabPane>
                            <TabPane tabId="2">
                                <LiberationMode unitName={unitName} unitStats={unitStats} unitAtt={unitAtt} unitType={unitType} unitSkill={unitSkill.liberation} 
                                    unitPassive={unitPassive} unitSlots={unitSlots} unitImage={unitImage.detailawk}/>
                            </TabPane>
                        </TabContent>
                    </React.Fragment>
                );
            }

            //Check if Phantom Bullet Exists
            if(unitSkill.phantombullet) {
                return (
                    <Container>
                        <Row>
                            <center>
                                <RenderDetail detail={unitImage} />
                                <h1><strong>{unitName}</strong></h1>
                                <p><i>{unitAtt} , {unitType}</i></p>
                            </center>
                        </Row>
                        <Row>
                            <Col>
                                <Table bordered>
                                    <tr>
                                        <th>
                                        HP
                                        </th>
                                        <th>
                                        ATK
                                        </th>
                                        <th>
                                        DEF
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>{unitStats.hp} </td>
                                        <td>{unitStats.atk} </td>
                                        <td>{unitStats.def} </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                        </td>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                        </td>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                        </td>
                                    </tr>
                                </Table>
                            </Col>
                            <Col xs="4">
                                <h3><strong>SLOTS</strong></h3>
                                <Table bordered>
                                    <tr>
                                        <th>
                                            <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                        </th>
                                        <th>
                                            <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                        </th>
                                        <th>
                                            <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                        </th>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <h3><strong>SKILL</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                            </Col>
                            <Col xs="4">
                                <h3><strong>ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                            </Col>
                            <Col xs="4">
                                <h3><strong>TRUE ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <h3><strong>PHANTOM BULLET</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.phantombulletbreak}</Badge> {unitSkill.phantombullet}</p>
                            </Col>
                            <Col xs="6">
                                <h3><strong>PASSIVES</strong></h3>
                                <ul>
                                    <li>{unitPassive.ability1}</li>
                                    <li>{unitPassive.ability2}</li>
                                    <li>{unitPassive.ability3}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                );
            }

            //Check if Cross Arts exists
            if(unitSkill.crossarts) {
                
                //Check Virago
                if(unitPassive.ability4) {
                    return (
                        <Container>
                            <Row>
                                <center>
                                    <RenderDetail detail={unitImage} />
                                    <h1><strong>{unitName}</strong></h1>
                                    <p><i>{unitAtt} , {unitType}</i></p>
                                </center>
                            </Row>
                            <Row>
                                <Col>
                                    <Table bordered>
                                        <tr>
                                            <th>
                                            HP
                                            </th>
                                            <th>
                                            ATK
                                            </th>
                                            <th>
                                            DEF
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>{unitStats.hp} </td>
                                            <td>{unitStats.atk} </td>
                                            <td>{unitStats.def} </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                            </td>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                            </td>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                <Col xs="4">
                                    <h3><strong>SLOTS</strong></h3>
                                    <Table bordered>
                                        <tr>
                                            <th>
                                                <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                            </th>
                                            <th>
                                                <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                            </th>
                                            <th>
                                                <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                            </th>
                                        </tr>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                                </Col>
                                <Col xs="4">
                                    <h3><strong>ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                                </Col>
                                <Col xs="4">
                                    <h3><strong>TRUE ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <h3><strong>CROSS ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.crossartsbreak}</Badge> {unitSkill.crossarts}</p>
                                </Col>
                                <Col xs="6">
                                    <h3><strong>PASSIVES</strong></h3>
                                    <ul>
                                        <li>{unitPassive.ability1}</li>
                                        <li>{unitPassive.ability2}</li>
                                        <li>{unitPassive.ability3}</li>
                                        <li>{unitPassive.ability4}</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    );
                }

                //3 Abilities
                return (
                        <Container>
                            <Row>
                                <center>
                                    <RenderDetail detail={unitImage} />
                                    <h1><strong>{unitName}</strong></h1>
                                    <p><i>{unitAtt} , {unitType}</i></p>
                                </center>
                            </Row>
                            <Row>
                                <Col>
                                    <Table bordered>
                                        <tr>
                                            <th>
                                            HP
                                            </th>
                                            <th>
                                            ATK
                                            </th>
                                            <th>
                                            DEF
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>{unitStats.hp} </td>
                                            <td>{unitStats.atk} </td>
                                            <td>{unitStats.def} </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                            </td>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                            </td>
                                            <td>
                                                <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                            </td>
                                        </tr>
                                    </Table>
                                </Col>
                                <Col xs="4">
                                    <h3><strong>SLOTS</strong></h3>
                                    <Table bordered>
                                        <tr>
                                            <th>
                                                <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                            </th>
                                            <th>
                                                <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                            </th>
                                            <th>
                                                <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                            </th>
                                        </tr>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <h3><strong>SKILL</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                                </Col>
                                <Col xs="4">
                                    <h3><strong>ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                                </Col>
                                <Col xs="4">    
                                    <h3><strong>TRUE ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <h3><strong>CROSS ARTS</strong></h3>
                                    <p><Badge color="primary" pill>BREAK {unitSkill.crossartsbreak}</Badge> {unitSkill.crossarts}</p>
                                </Col>
                                <Col xs="6">
                                    <h3><strong>PASSIVES</strong></h3>
                                    <ul>
                                        <li>{unitPassive.ability1}</li>
                                        <li>{unitPassive.ability2}</li>
                                        <li>{unitPassive.ability3}</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    );
            }
            
            //Specific if statement for Elmessio
            if(unitSkill.trueartsbreak2) {
                return (
                    <Container>
                        <Row>
                            <center>
                                <RenderDetail detail={unitImage} />
                                <h1><strong>{unitName}</strong></h1>
                                <p><i>{unitAtt} , {unitType}</i></p>
                            </center>
                        </Row>
                        <Row>
                            <Col>
                                <Table bordered>
                                    <tr>
                                        <th>
                                        HP
                                        </th>
                                        <th>
                                        ATK
                                        </th>
                                        <th>
                                        DEF
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>{unitStats.hp} </td>
                                        <td>{unitStats.atk} </td>
                                        <td>{unitStats.def} </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                        </td>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                        </td>
                                        <td>
                                            <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                        </td>
                                    </tr>
                                </Table>
                            </Col>
                            <Col xs="4">
                                <h3><strong>SLOTS</strong></h3>
                                <Table bordered>
                                    <tr>
                                        <th>
                                            <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                        </th>
                                        <th>
                                            <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                        </th>
                                        <th>
                                            <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                        </th>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <h3><strong>SKILL</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                            </Col>
                            <Col xs="4">
                                <h3><strong>ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                            </Col>
                            <Col xs="4">
                                <h3><strong>TRUE ARTS</strong></h3>
                                <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak1}</Badge> {unitSkill.truearts1}</p>
                                <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak2}</Badge> {unitSkill.truearts2}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><strong>PASSIVES</strong></h3>
                                <ul>
                                    <li>{unitPassive.ability1}</li>
                                    <li>{unitPassive.ability2}</li>
                                    <li>{unitPassive.ability3}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                );
            }

        //Default 3 Ability Units
        return (
            <Container>
                <Row>
                    <center>
                        <RenderDetail detail={unitImage} />
                        <h1><strong>{unitName}</strong></h1>
                        <p><i>{unitAtt} , {unitType}</i></p>
                    </center>
                </Row>
                <Row>
                    <Col>
                        <Table bordered>
                            <tr>
                                <th>
                                HP
                                </th>
                                <th>
                                ATK
                                </th>
                                <th>
                                DEF
                                </th>
                            </tr>
                            <tr>
                                <td>{unitStats.hp} </td>
                                <td>{unitStats.atk} </td>
                                <td>{unitStats.def} </td>
                            </tr>
                            <tr>
                                <td>
                                    <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                </td>
                                <td>
                                    <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                </td>
                                <td>
                                    <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                </td>
                            </tr>
                        </Table>
                    </Col>
                    <Col xs="4">
                        <h3><strong>SLOTS</strong></h3>
                        <Table bordered>
                            <tr>
                                <th>
                                    <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                </th>
                                <th>
                                    <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                </th>
                                <th>
                                    <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                </th>
                            </tr>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                    </Col>
                    <Col xs="4">
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                    </Col>
                    <Col xs="4">
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                            <li>{unitPassive.ability3}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }

    //If 3rd passive does not exist...
    if(unitPassive.ability2){
        return (
            <Container>
                <Row>
                    <center>
                        <RenderDetail detail={unitImage} />
                        <h1><strong>{unitName}</strong></h1>
                        <p><i>{unitAtt} , {unitType}</i></p>
                    </center>
                </Row>
                <Row>
                    <Col>
                        <Table bordered>
                            <tr>
                                <th>
                                HP
                                </th>
                                <th>
                                ATK
                                </th>
                                <th>
                                DEF
                                </th>
                            </tr>
                            <tr>
                                <td>{unitStats.hp} </td>
                                <td>{unitStats.atk} </td>
                                <td>{unitStats.def} </td>
                            </tr>
                            <tr>
                                <td>
                                    <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                                </td>
                                <td>
                                    <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                                </td>
                                <td>
                                    <Badge color="info" pill>+{unitStats.defplus}</Badge>
                                </td>
                            </tr>
                        </Table>
                    </Col>
                    <Col xs="4">
                        <h3><strong>SLOTS</strong></h3>
                        <Table bordered>
                            <tr>
                                <th>
                                    <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                                </th>
                                <th>
                                    <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                                </th>
                                <th>
                                    <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                                </th>
                            </tr>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                    </Col>
                    <Col xs="4">
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                    </Col>
                    <Col xs="4">
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
    return <div />
}

//Human version of Liberation Units Tab
export function HumanMode ({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots, unitImage}) {
    return (
        <Container>
            <Row>
                    <center>
                        <RenderDetail detail={unitImage} />
                        <h1><strong>{unitName}</strong></h1>
                        <p><i>{unitAtt} , {unitType}</i></p>
                    </center>
            </Row>
            <Row>
                <Col>
                    <Table bordered>
                        <tr>
                            <th>
                            HP
                            </th>
                            <th>
                            ATK
                            </th>
                            <th>
                            DEF
                            </th>
                        </tr>
                        <tr>
                            <td>{unitStats.hp} </td>
                            <td>{unitStats.atk} </td>
                            <td>{unitStats.def} </td>
                        </tr>
                        <tr>
                            <td>
                                <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                            </td>
                            <td>
                                <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                            </td>
                            <td>
                                <Badge color="info" pill>+{unitStats.defplus}</Badge>
                            </td>
                        </tr>
                    </Table>
                </Col>
                <Col xs="4">
                    <h3><strong>SLOTS</strong></h3>
                    <Table bordered>
                        <tr>
                            <th>
                                <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                            </th>
                            <th>
                                <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                            </th>
                            <th>
                                <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                            </th>
                        </tr>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <h3><strong>SKILL</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                </Col>
                <Col xs="4">
                    <h3><strong>ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                </Col>
                <Col xs="4">
                    <h3><strong>TRUE ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <h3><strong>PASSIVES</strong></h3>
                    <ul>
                        <li>{unitPassive.ability1}</li>
                        <li>{unitPassive.ability2}</li>
                        <li>{unitPassive.ability3}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

//Liberation Skill Tab
export function LiberationMode ({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots, unitImage}) {
    return (
        <Container>
            <Row>
                    <center>
                        <RenderDetail detail={unitImage} />
                        <h1><strong>{unitName}</strong></h1>
                        <p><i>{unitAtt} , {unitType}</i></p>
                    </center>
            </Row>
            <Row>
                <Col>
                    <Table bordered>
                        <tr>
                            <th>
                            HP
                            </th>
                            <th>
                            ATK
                            </th>
                            <th>
                            DEF
                            </th>
                        </tr>
                        <tr>
                            <td>{unitStats.hp} </td>
                            <td>{unitStats.atk} </td>
                            <td>{unitStats.def} </td>
                        </tr>
                        <tr>
                            <td>
                                <Badge color="info" pill>+{unitStats.hpplus}</Badge>
                            </td>
                            <td>
                                <Badge color="info" pill>+{unitStats.atkplus}</Badge>
                            </td>
                            <td>
                                <Badge color="info" pill>+{unitStats.defplus}</Badge>
                            </td>
                        </tr>
                    </Table>
                </Col>
                <Col xs="4">
                    <h3><strong>SLOTS</strong></h3>
                    <Table bordered>
                        <tr>
                            <th>
                                <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                            </th>
                            <th>
                                <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                            </th>
                            <th>
                                <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                            </th>
                        </tr>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3><strong>LIBERATION SKILLS</strong></h3>
                    <ul>
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill1break}</Badge> {unitSkill.skill1}</li>
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill2break}</Badge> {unitSkill.skill2}</li>
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill3break}</Badge> {unitSkill.skill3}</li>
                    </ul>
                    <h3><strong>MEGA SKILL</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.megaskillbreak}</Badge> {unitSkill.megaskill}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3><strong>MEGA ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.megaartsbreak}</Badge> {unitSkill.megaarts}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3><strong>PASSIVES</strong></h3>
                    <ul>
                        <li>{unitPassive.ability1}</li>
                        <li>{unitPassive.ability2}</li>
                        <li>{unitPassive.ability3}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

function RenderDetail({detail}){
    //Shows the Unit Detail
    return(
            <div className="row justify-content-md-center">
                        <Media src={detail} style={imageSize} />
            </div>
    )
}