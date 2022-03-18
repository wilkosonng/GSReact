import React, { useState } from 'react';
import { Tooltip, Navbar, NavbarToggler, Nav, NavItem, NavbarText, Collapse, Container, Row, Col, Media } from 'reactstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FaDiscord, FaFacebookF, FaTwitterSquare } from 'react-icons/fa';


function Header () {

//Renders a Navbar that collapses under certain viewports
const [isOpen, setIsOpen] = useState(false);

//Tooltips for External Links
const [discordTool, setDiscordTool] = useState(false);
const [facebookTool, setFacebookTool] = useState(false);
const [twitterTool, setTwitterTool] = useState(false);
const [gsTool, setGSTool] = useState(false);

const imageSize ={
    maxHeight: 300
};

const iconSize = {
    maxHeight: 30
};

return (
    <React.Fragment>
        <Container>
            <Row>
                <Col>
                <center>
                    <a href="/" >
                        <Media src="/../../Banner.png" style={imageSize}/>
                    </a>
                </center>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar fixed="top" expand="md" color="dark" dark>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar className="me-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/" activeClassName="active">
                                        <Media src="./chara_face_1200_1.png" style={{maxHeight: "40px"}} id="homeLink"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/news" activeClassName="active">
                                        <b>NEWS</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/units" activeClassName="active">
                                        <b>UNITS</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tierlist" activeClassName="active">
                                        <b>TIER LIST</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/equips" activeClassName="active">
                                        <b>EQUIPMENT</b>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>
                                <a href="https://discord.gg/grandsummoners" id="discordLink"><FaDiscord /></a>
                                <a href="https://www.facebook.com/GrandSummonersGlobal/" id="facebookLink"><FaFacebookF /></a>
                                <a href="https://twitter.com/GRANDSUMMONERS" id="twitterLink"><FaTwitterSquare /></a>
                                <a href="https://grandsummoners.com/" id="gsLink"><img src="/../../db/Icons/drops/resultbox_close_1_3.png" style={iconSize} /></a>
                                <Tooltip isOpen={discordTool}
                                    target="discordLink"
                                    placement="bottom"
                                    toggle={() => setDiscordTool(!discordTool)} >Official Discord</Tooltip>
                                <Tooltip isOpen={facebookTool}
                                    target="facebookLink"
                                    placement="bottom"
                                    toggle={() => setFacebookTool(!facebookTool)} >Facebook</Tooltip>
                                <Tooltip isOpen={twitterTool}
                                    target="twitterLink"
                                    placement="bottom"
                                    toggle={() => setTwitterTool(!twitterTool)} >Twitter</Tooltip>
                                <Tooltip isOpen={gsTool}
                                target="gsLink"
                                placement="bottom"
                                toggle={() => setGSTool(!gsTool)} >Grand Summoners Official Page</Tooltip>
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                    <Outlet />
                </Col>
            </Row>
        </Container>
        
    </React.Fragment>
);
}

export default Header;