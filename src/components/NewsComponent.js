import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getNews } from '../shared/news';

export default function News () {
    //Obtain Articles
    const newsTopics = getNews();

    //innerHTML usually unsafe, but there's no user-submitted content so no javascript injections
    //TODO: Create unique links for each article, then make a new component that displays the full article. Also limit card size to make a preview-like design
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "gray"}}>
                    <CardHeader>
                        <h1><center><strong>Game News</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
            <Row>
                <Card style={{backgroundColor:"blue"}}>
                    <CardBody>
                        <CardGroup>
                            <Col lg="4">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SSS</strong></center>
                                </Card>
                            
                        
                            {newsTopics.map(theNews => {
                                const theArticle = theNews.article;
                                return (
                                <Card>
                                    <CardHeader>
                                        <h3><center><strong>{theNews.title}</strong></center></h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div dangerouslySetInnerHTML={{ __html: theArticle }} />
                                    </CardBody>
                                </Card>
                                )
                                
                            })}
                            </Col>
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            </Row>
        </Container>
    )
}