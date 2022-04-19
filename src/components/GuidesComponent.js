import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const cardCategorySize = {
    maxWidth: "25rem",
    width: "100%",
    height: "10rem",
    backgroundColor: "#2e9cca",
    alignItems: "center", 
    justifyContent: "center"
}

const cardSize = {
    maxWidth: "20rem", 
    width: "100%", 
    height: "10rem",
    backgroundColor: "#2e9cca",
    alignItems: "center", 
    justifyContent: "center"
}
export default function GuidesMainPage () {
    //TODO: Replace the Title with an image banner of the article
    //TODO: Route Guides
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>Game Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", width: "100%"}}>
                    <CardBody>
                        <h1><b><center>Popular Guides</center></b></h1>
                        <CardGroup style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
                            <Link to="FAQ" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardSize}>
                                        <h1><b><center>F.A.Q.</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="reroll-guide" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardSize}>
                                            <h1><b><center>Current Reroll Recommendations</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="curret-banner" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardSize}>
                                            <h1><b><center>Current Banner Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                        </CardGroup>
                        <h1><b><center>Guide Categories</center></b></h1>
                        <CardGroup style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
                            <Link to="mines-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Mines Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="giant-boss-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Giant Boss Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="unit-reviews" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Unit Reviews</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="event-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Event Guides</center></b></h1>
                                    </Card>
                                </Col>
                            </Link>
                            <Link to="other-guides" activeClassName="active">
                                <Col lg="auto">
                                    <Card style={cardCategorySize}>
                                            <h1><b><center>Other Guides</center></b></h1>
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
