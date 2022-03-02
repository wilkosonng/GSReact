import React, { Component } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse, Container, Row, Col, Media } from 'reactstrap';
import { NavLink, Outlet } from 'react-router-dom';

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
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                        <center><Media src="/../../Banner.png" object-fit="cover"/></center>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Navbar sticky="top" expand="md">
                                <NavbarToggler onClick={this.navCollapser} />

                                <Collapse isOpen={this.state.navCheck} navbar>
                                    <Nav navbar>
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
                                            <NavLink className="nav-link" to="/equips" activeClassName="active">
                                                <b>EQUIPMENT</b>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
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