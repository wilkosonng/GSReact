import React, { useState } from 'react';
import { Container, Row, Media, Badge, Table, Nav, NavItem, TabContent, TabPane, NavLink, List } from 'reactstrap';
import classnames from 'classnames';

const lbIconSize = {
    maxHeight: 40,
    maxWidth: 40
}

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

function RenderStat({ unitStats }) {
    return (
        <>
            <Row>
                <Table bordered>
                    <tr>
                        <th>
                            <center>HP</center>
                        </th>
                        <th>
                            <center>ATK</center>
                        </th>
                        <th>
                            <center>DEF</center>
                        </th>
                    </tr>
                    <tr>
                        <td><center>{unitStats.hp}</center></td>
                        <td><center>{unitStats.atk}</center></td>
                        <td><center>{unitStats.def}</center></td>
                    </tr>
                    <tr>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.hpplus}</Badge></center>
                        </td>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.atkplus}</Badge></center>
                        </td>
                        <td>
                            <center><Badge color="info" pill>+{unitStats.defplus}</Badge></center>
                        </td>
                    </tr>
                </Table>
            </Row>
        </>
    )
}

function RenderSlots({ unitSlots }) {
    return (
        <Row>
            <h3><strong>SLOTS</strong></h3>
            <Table bordered>
                <tr>
                    <th>
                        <center><h4>{unitSlots.slot1}☆<br/><Media src={unitSlots.slot1type} style={lbIconSize} /></h4></center>
                    </th>
                    <th>
                        <center><h4>{unitSlots.slot2}☆<br/><Media src={unitSlots.slot2type} style={lbIconSize} /></h4></center>
                    </th>
                    <th>
                        <center><h4>{unitSlots.slot3}☆<br/>
                            {
                            unitSlots.slot31type ? <><Media src={unitSlots.slot31type} style={lbIconSize} /><br />/ <br/><Media src={unitSlots.slot32type} style={lbIconSize} /></>
                            : <Media src={unitSlots.slot3type} style={lbIconSize} /> 
                            }
                        </h4></center>
                    </th>
                </tr>
            </Table>
        </Row>
    )
}

function RenderSkills({ unitSkill }) {
    return (
        <>
            { unitSkill.skill1break ? 
                <Row>
                    <h3><strong>SKILL</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak1}</Badge> {unitSkill.skill}</p>
                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak2}</Badge> {unitSkill.magiaskill}</p>
                </Row> : 
                <Row>
                    <h3><strong>SKILL</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                </Row>
            }
            
            <Row>
                <h3><strong>ARTS</strong></h3>
                <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
            </Row>


            { unitSkill.trueartsbreak || unitSkill.trueartsbreak === 0 ? 
                <Row>
                    <h3><strong>TRUE ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                </Row>
            : null }

            { unitSkill.trueartsbreak1 ? 
                <Row>
                    <h3><strong>TRUE ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak1}</Badge> {unitSkill.truearts1}</p>
                    <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak2}</Badge> {unitSkill.truearts2}</p>
                </Row> : null }

            { unitSkill.crossarts ? 
                <Row>
                    <h3><strong>CROSS ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.crossartsbreak}</Badge> {unitSkill.crossarts}</p>
                </Row> : null
            }

            { unitSkill.phantombullet ? 
                <Row>
                    <h3><strong>PHANTOM BULLET</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.phantombulletbreak}</Badge> {unitSkill.phantombullet}</p>
                </Row> : null
            }

            { unitSkill.ultraname ? 
                <Row>
                    <h3><strong>Ultra "{unitSkill.ultraname}"</strong></h3>
                    <h4>5☆ <img src={unitSkill.ultratype} style={lbIconSize} /></h4>
                    <p><Badge color="primary" pill>BREAK {unitSkill.ultrabreak}</Badge> {unitSkill.ultra}</p>
                    <p>
                        <b>NOTES:</b>
                        <ul>
                            <li>The Abilities of the Equip originally in the <img src={unitSkill.ultratype} style={{maxWidth: "25px"}}/> slot will be retained.</li>
                            <li>The active of the Equip originall in the <img src={unitSkill.ultratype} style={{maxWidth: "25px"}}/> slot cannot be activated while this Equip replaces it. If it was on cooldown when this Equip replaces it, the cooldown will continue counting down while this Equip is replacing it.</li>
                        </ul>
                    </p>
                </Row> : null }
            {
                unitSkill.superarts ? 
                <Row>
                    <h3><strong>SUPER ARTS</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.superartsbreak}</Badge> {unitSkill.superarts}</p>
                </Row> : null
            }
            
        </>
    )
}

function RenderPassives({ unitPassive }) {
    return (
        <Row>
            <h3><strong>PASSIVES</strong></h3>
            <List type="unstyled">
                <li>{unitPassive.ability1}</li>
                { unitPassive.ability2 ? <li>{unitPassive.ability2}</li> : null }
                { unitPassive.ability3 ? <li>{unitPassive.ability3}</li> : null }
                { unitPassive.ability4 ? <li>{unitPassive.ability4}</li> : null }
            </List>
        </Row>
    )
}

function RenderImageAndTypes({ unitImage, unitAtt, unitType, unitName }) {
    if (unitImage.detailsuper) {
        return (
            <>
                <RenderDetail detail={unitImage.detailsuper} />
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }

    if (unitImage.detailawk) {
        return (
            <>
                <RenderDetail detail={unitImage.detailawk} />
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }

    if (unitImage.detail5) {
        return (
            <>
                <RenderDetail detail={unitImage.detail5} />
                <h1><strong>{unitName}</strong></h1>
                <p><i>{unitAtt} , {unitType}</i></p>
            </>
        )
    }
}
export function RenderStats({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots, unitImage}){
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    return (
        <Container style={{marginTop: "1rem"}}>
            <center>
                <RenderImageAndTypes unitImage={unitImage} unitName={unitName} unitAtt={unitAtt} unitType={unitType} />
            </center>
            { unitSkill.revelation ? 
            <>
                <Nav pills justified>
                <NavItem>
                    <NavLink className={classnames({ active: currentTab === '1' })}
                        onClick={() => {toggle('1')}} >
                            <Media src={unitImage.thumbawk} object-fit="cover" id="unitName"/>
                    </NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: currentTab === '2' })}
                        onClick={() => {toggle('2')}} >
                            <Media src={unitImage.revelation} object-fit="cover" id="unitName"/>
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={currentTab}>
                    <TabPane tabId="1">
                        <HumanMode unitName={unitName} unitStats={unitStats} unitAtt={unitAtt} 
                            unitType={unitType} unitSkill={unitSkill} unitPassive={unitPassive} unitSlots={unitSlots} unitImage={unitImage.detailawk}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <RevelationMode unitName={unitName} unitStats={unitStats} unitAtt={unitAtt} unitType={unitType} unitSkill={unitSkill.revelation} 
                            unitPassive={unitPassive} unitSlots={unitSlots} unitImage={unitImage.detailawk}/>
                    </TabPane>
                </TabContent></> : 
                <>
                    <RenderStat unitStats={unitStats} />
                    <RenderSlots unitSlots={unitSlots} />
                    <RenderSkills unitSkill={unitSkill} />
                    <RenderPassives unitPassive={unitPassive} />
                </>
            }
            
            
        </Container>

    );
}

//Human version of Liberation Units Tab
export function HumanMode ({unitStats, unitSkill, unitPassive, unitSlots}) {
    return (
        <>
            <RenderStat unitStats={unitStats} />
            <RenderSlots unitSlots={unitSlots} />
            <RenderSkills unitSkill={unitSkill} />
            <RenderPassives unitPassive={unitPassive} />
        </>
    );
}

//Liberation Skill Tab
export function RevelationMode ({unitStats, unitSkill, unitPassive, unitSlots}) {
    return (
        <>
            <RenderStat unitStats={unitStats} />
            <RenderSlots unitSlots={unitSlots} />
            <Row>
                    <h3><strong>REVELATION SKILLS</strong></h3>
                    <List type="unstyled">
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill1break}</Badge> {unitSkill.skill1}</li>
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill2break}</Badge> {unitSkill.skill2}</li>
                        <li><Badge color="primary" pill>BREAK {unitSkill.skill3break}</Badge> {unitSkill.skill3}</li>
                    </List>
                    <h3><strong>MEGA SKILL</strong></h3>
                    <p><Badge color="primary" pill>BREAK {unitSkill.megaskillbreak}</Badge> {unitSkill.megaskill}</p>
            </Row>
            <Row>
                <h3><strong>MEGA ARTS</strong></h3>
                <p><Badge color="primary" pill>BREAK {unitSkill.megaartsbreak}</Badge> {unitSkill.megaarts}</p>
            </Row>
            <RenderPassives unitPassive={unitPassive} />
        </>
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