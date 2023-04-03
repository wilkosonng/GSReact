import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getCrestBossGuides } from '../../shared/guides/crestbossguides';
import { Link } from 'react-router-dom';

export default function CrestGuides () {
    //Obtain Articles
    const guideTopics = getCrestBossGuides();

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>Crest Boss Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardBody>
                        <center>
                            <a href="/guides"><button style={{backgroundColor: "#22bbff", color: "#292930", marginBottom: "2rem"}}>Return to Guides</button></a>
                        </center>
                        <CardGroup>
                            {guideTopics.map(theGuides => {
                                return (
                                    <React.Fragment key={theGuides.id}>
                                        <Col md="4">
                                            <center>
                                            <Link to={`/guides/crest-guides/${theGuides.link}`} style={{textDecoration: 'none'}} key={theGuides.id}>
                                                <img src={theGuides.banner} style={{height: "auto", width: "100%", maxWidth: "400px"}} alt={theGuides.title}/>
                                            </Link></center>
                                        </Col>
                                    </React.Fragment>
                                )
                            }
                            )}
                        </CardGroup>
                        <center>
                            <a href="/guides"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to Guides</button></a>
                        </center>
                    </CardBody>
                    
                </Card>
            </Row>
        </Container>
    )
}