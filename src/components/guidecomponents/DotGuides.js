import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardGroup, Container, Row, Col } from 'reactstrap';
import { getTrialGuides } from '../../shared/guides/dotguides';
import { Link } from 'react-router-dom';

export default function DotGuide() {
    //Obtain Articles
    const guideTopics = getTrialGuides();

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
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
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardBody>
                        <CardGroup>
                            {guideTopics.map(theGuides => {
                                return (
                                    <React.Fragment key={theGuides.id}>
                                        <Col>
                                            <Link to={`/guides/dungeon-of-trials/${theGuides.id}`} style={{textDecoration: 'none'}} key={theGuides.id}>
                                                <Card style={{height: "75px", width: "75px", backgroundColor: "#202022", color: "#e7f9fc", marginBottom: "1rem"}}>
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