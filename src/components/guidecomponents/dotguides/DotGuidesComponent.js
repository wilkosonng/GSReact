import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from  'reactstrap'
import { getTrialGuidesById } from '../../../shared/guides/dotguides';
import '../../../App.css'

export default function DisplayTrialGuide() {
    const { articleId } = useParams();
    const guideArticle = getTrialGuidesById(articleId);

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>{guideArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                        <center>
                            <a href="/guides/dungeon-of-trials"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to DoT Guides</button></a>
                        </center>
                        <p style={{height: "auto", marginTop: "2rem"}}><div dangerouslySetInnerHTML={{ __html: guideArticle.article }} /></p>
                        <center>
                            <a href="/guides/dungeon-of-trials"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to DoT Guides</button></a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}