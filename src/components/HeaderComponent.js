import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavbarText, Collapse, Container, Row, Col, Media } from 'reactstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FaDiscord, FaFacebookF, FaTwitterSquare } from 'react-icons/fa';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navCheck: false
        };

        this.navCollapser = this.navCollapser.bind(this);
    }

    navCollapser() { 
        this.setState({
            navCheck: !this.state.navCheck
        });
    }

    //Renders a Navbar that collapses under certain viewports
    render() {
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
                                    <NavbarToggler onClick={this.navCollapser} />

                                    <Collapse isOpen={this.state.navCheck} navbar>
                                        <Nav navbar className="me-auto">
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
                                            <a href=""><FaFacebookF /></a>
                                            <a href="https://discord.gg/grandsummoners"><FaDiscord /></a>
                                            <a href="https://twitter.com/GRANDSUMMONERS"><FaTwitterSquare /></a>
                                            <a href="https://grandsummoners.com/"><img src="/../../db/Icons/drops/resultbox_close_1_3.png" style={iconSize} /></a>
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
    
}

export default Header;