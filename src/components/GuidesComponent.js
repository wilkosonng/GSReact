import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function GuidesMainPage () {
    //TODO: Replace the Title with an image banner of the article
    //TODO: Route Guides
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "gray"}}>
                    <CardHeader>
                        <h1><center><strong>Game Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"blue"}}>
                    <CardBody>
                        <h1><b><center>Popular Guides</center></b></h1>
                        <CardGroup>
                            <Link to="FAQ" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                        <h1><b><center>F.A.Q.</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="reroll-guide" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Current Reroll Recommendations</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="curret-banner" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Current Banner Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                        </CardGroup>
                        <h1><b><center>Guide Categories</center></b></h1>
                        <CardGroup>
                            <Link to="mines-guides" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Mines Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="giant-boss-guides" activeClassName="active">
                                <Col lg="3">
                                    <center>
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Giant Boss Guides</center></b></h1>
                                    </Card>
                                    </center>
                                    
                                </Col>
                            </Link>
                            <Link to="unit-reviews" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Unit Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="event-guides" activeClassName="active">
                                <Col lg="3">
                                    <Card style={{width: "300px", height: "200px"}}>
                                            <h1><b><center>Unit Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}