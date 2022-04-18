import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getNewsById } from '../../shared/news/news';
import '../../App.css'

export default function Article () {
    const { articleId } = useParams();
    const newsArticle = getNewsById(articleId);

    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>{newsArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody style={{backgroundColor: "#464866", marginBottom: "1rem"}}>
                        <center>
                            <p><div dangerouslySetInnerHTML={{ __html: newsArticle.article }} /></p>
                            <a href="/news" style={{backgroundColor: "#29648a", color: "#aaabb8", textDecoration: "none"}}>Return to News</a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}