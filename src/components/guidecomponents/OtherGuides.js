import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getGuides } from '../../shared/guides/guides';
import { Link } from 'react-router-dom';

export default function OtherGuides () {
    //Obtain Articles
    const guideTopics = getGuides();

    //innerHTML usually unsafe, but there's no user-submitted content so no javascript injections
    //TODO: Create unique links for each article, then make a new component that displays the full article. Also limit card size to make a preview-like design
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>Other Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody>
                            <Card style={{backgroundColor:"#464866", color: "#C5C6C7", border: "none"}}>
                                <CardBody>
                                <CardGroup>
                                    {guideTopics.map(theGuides => {
                                        return (
                                            <React.Fragment key={theGuides.id}>
                                                <Col>
                                                    <Link to={`/guides/other-guides/${theGuides.link}`} style={{textDecoration: 'none'}} key={theGuides.id}>
                                                        <Card style={{height: "auto", backgroundColor: "#25274d", color: "#aaabb8", overflow: "hidden", marginBottom: "1rem"}}>
                                                            <center><p style={{backgroundColor: "#29648a", color: "#aaabb8", maxWidth: "200px", float: "right", marginTop: "3rem", marginRight: "1rem", width: "100%", height: "auto"}}>Read More</p></center>
                                                        </Card>
                                                    </Link>
                                                </Col>
                                            </React.Fragment>
                                        )
                                    }
                                    )}
                                </CardGroup>
                                </CardBody>
                            </Card>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}