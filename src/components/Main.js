import React from 'react';
import { Col, Container, Row, Media } from 'reactstrap';

//Use this file to conglomerate all the pages

/**
 * Equip Banner for future use
 *                 <Col>
                    <center>
                        <a href="/equips">
                            <Media src="equips_banner.png" />
                        </a>
                    </center>
                </Col>
 */

const imageSize = { 
    width: "100%",
    height: "auto"
}

function Main () {
    return (
        <Container>
            <Row>
                <center><strong><h1>Welcome to the Grand Summoners Database</h1></strong></center>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col lg="auto">
                    <center>
                        <a href="/news">
                            <Media src="news_banner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
                <Col lg="auto">
                    <center>
                        <a href="/tierlist">
                            <Media src="tierlist_banner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col lg="auto">
                    <center>
                        <a href="/units">
                            <Media src="units_banner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
                <Col lg="auto">
                    <center>
                        <a href="/guides">
                            <Media src="guides_banner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;