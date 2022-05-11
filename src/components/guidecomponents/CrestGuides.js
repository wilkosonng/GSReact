import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getCrestBossGuides } from '../../shared/guides/crestbossguides';
import { Link } from 'react-router-dom';

export default function CrestGuides () {
    //Obtain Articles
    const guideTopics = getCrestBossGuides();

    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>Crest Boss Guides</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody>
                        {guideTopics.map(theGuides => {
                            return (
                                <React.Fragment key={theGuides.id}>
                                    <Col lg="auto">
                                        <center>
                                        <Link to={`/guides/crest-guides/${theGuides.link}`} style={{textDecoration: 'none'}} key={theGuides.id}>
                                            <img src={theGuides.banner} style={{height: "auto", width: "100%", maxWidth: "400px"}}/>
                                        </Link></center>
                                    </Col>
                                </React.Fragment>
                            )
                        }
                        )}
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}