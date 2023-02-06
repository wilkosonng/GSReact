import { Container, Row, Badge, Media, NavItem, NavLink, Nav, TabContent, TabPane, List } from 'reactstrap';
import React, { useState } from 'react';
import classnames from 'classnames';

const imageSize ={
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    maxWidth: "400px"
};

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75,
    width: "100%"
};

export function RenderTrue({unitTrue}) {
    //Hook for Tab State
    const [currentTab, setCurrentTab] = useState('1');

    //Toggle Tab
    const toggle = tab => {
        if(currentTab !== tab) setCurrentTab(tab);
    }

    const tw = unitTrue.trueweapon;

    return (
        <>
            <Container style={{marginTop: "1rem"}}>
            { tw ? 
                <>
                    { tw.true1 ? 
                        <>
                            <Nav pills justified>
                                <NavItem>
                                    <NavLink className={classnames({ active: currentTab === '1' })}
                                        onClick={() => {toggle('1')}}>
                                        <Media src={tw.true1.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: currentTab === '2' })}
                                        onClick={() => {toggle('2')}}>
                                        <Media src={tw.true2.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                    </NavLink>
                                </NavItem>
                                {
                                    tw.true3 ? 
                                    <NavItem>
                                        <NavLink className={classnames({ active: currentTab === '3' })}
                                            onClick={() => {toggle('3')}}>
                                            <Media src={tw.true2.thumb} object-fit="cover" id="unitTrue" style={thumbnailSize}/>
                                        </NavLink>
                                    </NavItem>
                                    :
                                    null
                                }
                            </Nav>
                            <TabContent activeTab={currentTab}>
                                <TabPane tabId="1">
                                    <RenderAll detail={tw.true1.detail} slot={tw.true1.slot} name={tw.true1.name} 
                                    skill={tw.true1.skill} skillbreak={tw.true1.skillbreak} passive={tw.true1.passive} />
                                </TabPane>
                            </TabContent>
                            <TabContent activeTab={currentTab}>
                                <TabPane tabId="2">
                                    <RenderAll detail={tw.true2.detail} slot={tw.true2.slot} name={tw.true2.name} 
                                    skill={tw.true2.skill} skillbreak={tw.true2.skillbreak} passive={tw.true2.passive} />
                                </TabPane>
                            </TabContent>
                            {
                                tw.true3 ? 
                                <TabContent activeTab={currentTab}>
                                    <TabPane tabId="3">
                                        <RenderAll detail={tw.true3.detail} slot={tw.true3.slot} name={tw.true3.name} 
                                        skill={tw.true3.skill} skillbreak={tw.true3.skillbreak} passive={tw.true3.passive} />
                                    </TabPane>
                                </TabContent>
                                : null
                            }
                        </>
                        : 
                        <>
                            <RenderAll detail={tw.detail} slot={tw.slot} name={tw.name} 
                                skill={tw.skill} skillbreak={tw.skillbreak} passive={tw.passive} />
                        </>
                    }
                    
                </>
            : <center><h1>This unit does not have a True Weapon</h1></center>}
            </Container>
        </>
        
    )
    
}

const RenderAll = ({ detail, slot, name, skill, skillbreak, passive }) => {
    return (
        <center>
            <RenderImage detail={detail} />
            <RenderName name={name} slot={slot} />
            <RenderSkill skillbreak={skillbreak} skill={skill} />
            <RenderPassive passive={passive} />
        </center>
    )
}
const RenderImage = ({ detail }) => {
    return (
        <Row>
            <center><Media src={detail} style={imageSize} /></center>
        </Row>
    )
}

const RenderName = ({ slot, name }) => {
    return (
        <Row>
            <strong><h1><Media src={slot} />{name}<Media src={slot} /></h1></strong>
        </Row>
    )
}

const RenderSkill = ({ skill, skillbreak }) => {
    return (
        <Row>
            <h3><strong>SKILL</strong></h3>
            <center><p><Badge color="primary">BREAK {skillbreak}</Badge> {skill} </p></center>
        </Row>
    )
}

const RenderPassive = ({ passive }) => {
    return (
        <Row>
            <h3><strong>PASSIVE</strong></h3>
            <List type="unstyled">
                <li>{passive.ability1}</li>
                { passive.ability2 ? <li>{passive.ability2}</li> : null }
                { passive.ability3 ? <li>{passive.ability3}</li> : null }
                { passive.ability4 ? <li>{passive.ability4}</li> : null }
            </List>
        </Row>
    )
}