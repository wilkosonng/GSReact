import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getGuidesByLink } from '../../../shared/guides/guides';
import '../../../App.css'

export default function DisplayGuide () {
    const { articleId } = useParams();
    const guideArticle = getGuidesByLink(articleId);

    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>{guideArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody style={{backgroundColor: "#464866", marginBottom: "1rem"}}>
                        <center>
                            <p style={{height: "auto"}}><div dangerouslySetInnerHTML={{ __html: guideArticle.article }} /></p>
                            <a href="/guides/other-guides" style={{backgroundColor: "#29648a", color: "#aaabb8", textDecoration: "none"}}>Return to Guides</a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}