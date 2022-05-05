import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from  'reactstrap'
import { getTrialGuidesById } from '../../../shared/guides/dotguides';
import '../../../App.css'

export default function DisplayTrialGuide() {
    const { articleId } = useParams();
    const guideArticle = getTrialGuidesById(articleId);

    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>{guideArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody style={{backgroundColor: "#464866", marginBottom: "1rem"}}>
                        <p style={{height: "auto"}}><div dangerouslySetInnerHTML={{ __html: guideArticle.article }} /></p>
                        <center>
                            <a href="/guides/dungeon-of-trials" style={{backgroundColor: "#29648a", color: "#aaabb8", textDecoration: "none"}}>Return to DoT Guides</a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}