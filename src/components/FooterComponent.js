import React from 'react';
import { Nav, NavItem, Container, Row, Col } from 'reactstrap';

function Footer () {
    //Display Navigation Links for bottom
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Nav fill vertical>
                            <NavItem>
                            <p>Database</p>
                                <a active href="/">
                                    Home
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/news">
                                    News
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/tierlist">
                                    Tierlist
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/units">
                                    Units
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="/equips">
                                    Equipment
                                </a>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav fill vertical>  
                            <NavItem>
                                <p>Official Links</p>
                                <a href="https://grandsummoners.com/">
                                    Grand Summoners Home Page
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="https://discord.gg/grandsummoners">
                                    Official Discord
                                </a>
                            </NavItem>    
                            <NavItem>
                                <a href="https://www.facebook.com/GrandSummonersGlobal">
                                    Facebook Page
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="https://twitter.com/GRANDSUMMONERS">
                                    Twitter
                                </a>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Footer;