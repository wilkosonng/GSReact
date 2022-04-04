import React from 'react';
import { Nav, NavItem, Container, Row, Col, Card, CardGroup } from 'reactstrap';
import '../App.css';
import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';

//Styled Component for Official Links
const LinkColor = styled.a`
    text-decoration: none;
    color: #aaabb8;
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
                    <CardGroup style={{paddingTop: "10rem", marginBottom: "1rem"}}>
                        <Card md="3" style={{backgroundColor: "#464866"}}>
                            <p style={{paddingTop: "1rem", justifyItems: "center"}}><center><i>The website grandsummoners.info is not<br /> affiliated with nor endorsed by NextNinja. 
                                <br />All images belong to NextNinja.</i></center></p> 
                            <p><center><i><FaRegCopyright /> grandsummoners.info 2022</i></center></p>
                        </Card>
                        <Card md="3" style={{backgroundColor: "#464866"}}>
                            <Nav fill vertical>  
                                <NavItem>
                                    <p style={{color: '#aaabb8', marginBottom: "0rem", marginTop: "6px"}}><strong>Official Links</strong></p>
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