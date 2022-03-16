import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { getNewsById } from '../../shared/news';

export default function Article () {
    const { articleId } = useParams();
    const newsArticle = getNewsById(articleId);

 
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "black"}}>
                    <CardHeader>
                        <h1><center><strong>{newsArticle.title}</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                        <center>
                            <p><div dangerouslySetInnerHTML={{ __html: newsArticle.article }} /></p>
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}