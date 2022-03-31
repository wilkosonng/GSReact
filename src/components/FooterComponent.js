import React from 'react';
import { Nav, NavItem, Container, Row, Col, Card, CardGroup } from 'reactstrap';
import '../App.css';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

//Styled Component for Official Links
const LinkColor = styled.a`
    text-decoration: none;
    color: #25272d;
    &:hover {
        background-color: #2e9cca
    }
`

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
                        <Card md="3" style={{backgroundColor: "#29648a"}}>
                            <p><center><i>The website grandsummoners.info is not affiliated with nor endorsed by NextNinja. All images belong to NextNinja.</i></center></p> 
                            <p><center><i><FaRegCopyright /> grandsummoners.info 2022</i></center></p>
                        </Card>
                        <Card md="3" style={{backgroundColor: "#29648a"}}>
                            <Nav fill vertical>  
                                <NavItem>
                                    <p style={{color: '#aaabb8'}}><strong>Official Links</strong></p>
                                    <LinkColor href="https://global.grandsummoners.com/" >
                                        Grand Summoners Home Page
                                    </LinkColor>
                                </NavItem>
                                <NavItem>
                                    <LinkColor href="https://discord.gg/grandsummoners" >
                                        Official Discord
                                    </LinkColor>
                                </NavItem>    
                                <NavItem>
                                    <LinkColor href="https://www.facebook.com/GrandSummonersGlobal" >
                                        Facebook Page
                                    </LinkColor>
                                </NavItem>
                                <NavItem>
                                    <LinkColor href="https://twitter.com/GRANDSUMMONERS" >
                                        Twitter
                                    </LinkColor>
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