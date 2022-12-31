import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getNewsById } from '../../shared/news/news';
import '../../App.css'

export default function Article () {
    const { articleId } = useParams();
    const newsArticle = getNewsById(articleId);

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0"}}>
                        <h1><center><strong>{newsArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                        <center>
                            <p><div dangerouslySetInnerHTML={{ __html: newsArticle.article }} /></p>
                            <a href="/news"><button style={{backgroundColor: "#22bbff", color: "#292930" }}>Return to News</button></a>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}