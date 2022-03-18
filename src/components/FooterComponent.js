import React from 'react';
import { Nav, NavItem, Container, Row, Col, Card, CardGroup } from 'reactstrap';
import '../App.css';
import { FaRegCopyright } from 'react-icons/fa';

function Footer () {
    //Display Navigation Links for bottom
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <script data-ad-client="ca-pub-7386611028385098" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
                        This site is supported by ads. Please consider disabling Adblockers.
                    </script>
                </Row>
                <Row>
                    <CardGroup style={{paddingTop: "50px"}}>
                        <Card md="3" style={{backgroundColor: "gray"}}>
                            <p><center><i>The website grandsummoners.info is not affiliated with nor endorsed by NextNinja. All images belong to NextNinja.</i></center></p> 
                            <p><center><i><FaRegCopyright /> grandsummoners.info 2022</i></center></p>
                        </Card>
                        <Card md="3" style={{backgroundColor: "gray"}}>
                            <Nav fill vertical>  
                                <NavItem>
                                    <p style={{color: 'white'}}><strong>Official Links</strong></p>
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
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Footer;