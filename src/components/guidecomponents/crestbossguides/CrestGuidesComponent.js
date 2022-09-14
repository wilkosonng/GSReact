import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getCrestByLink } from '../../../shared/guides/crestbossguides';
import '../../../App.css'

export default function DisplayCrestGuide () {
    const { articleId } = useParams();
    const guideArticle = getCrestByLink(articleId);

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>{guideArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody style={{marginBottom: "1rem"}}>
                        <center>
                            <a href="/guides/crest-guides"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to Crest Guides</button></a>
                        </center>
                        <p style={{height: "auto", marginTop: "2rem"}}><div dangerouslySetInnerHTML={{ __html: guideArticle.article }} /></p>
                        <center>
                            <a href="/guides/crest-guides"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to Crest Guides</button></a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}