import React from 'react';
import { Col, Container, Row, Media } from 'reactstrap';


const imageSize ={
    maxHeight: 200
};


//Use this file to conglomerate all the pages

function Main () {
    return (
        <Container>
            <Row>
                <center><strong><h1>DATABASE</h1></strong></center>
            </Row>
            <Row>
                <Col>
                    <center>
                        <a href="/news">News</a>
                    </center>
                </Col>
                <Col>
                    <center>
                        <a href="/units">
                            <Media src="/../../UnitsBanner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col>
                    <center>
                        <a href="/tierlist">Tierlist</a>
                    </center>
                </Col>
                <Col>
                    <center>
                        <a href="/equips">
                            <Media src="/../../EquipsBanner.png" style={imageSize}/>
                        </a>
                    </center>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;