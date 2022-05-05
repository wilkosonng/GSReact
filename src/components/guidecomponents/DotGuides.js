import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardGroup, Container, Row, Col } from 'reactstrap';
import { getTrialGuides } from '../../shared/guides/dotguides';
import { Link } from 'react-router-dom';

export default function DotGuide() {
    //Obtain Articles
    const guideTopics = getTrialGuides();

    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a", color: "aaabb8"}}>
                    <CardHeader>
                        <h1><center>Dungeon of Trials</center></h1>
                    </CardHeader>
                    <CardBody>
                        <center>
                            <p>Expand each section to view the guide for each floor.</p>
                            <p><b>NOTE: </b>Floors 1-15 are not shown, as they are trivial provided you power up your Units enough</p>
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody>
                        <CardGroup>
                            {guideTopics.map(theGuides => {
                                return (
                                    <React.Fragment key={theGuides.id}>
                                        <Col>
                                            <Link to={`/guides/dungeon-of-trials/${theGuides.id}`} style={{textDecoration: 'none'}} key={theGuides.id}>
                                                <Card style={{height: "75px", width: "75px", backgroundColor: "#25274d", color: "#aaabb8", marginBottom: "1rem"}}>
                                                    <center><h1>{theGuides.id}</h1></center>
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
            </Row>
        </Container>
        
    )
}