import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getNews } from '../shared/news';
import { Link } from 'react-router-dom';

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
                <Card style={{backgroundColor:"blue"}}>
                    <CardBody>
                        <CardGroup>
                            {newsTopics.map(theNews => {
                                const theArticle = theNews.article;
                                return (
                                    <React.Fragment key={theNews.id}>
                                        <Col lg="3">
                                            <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none'}} key={theNews.id}>
                                                <Card style={{width: "300px", height: "300px"}}>
                                                    <CardHeader>
                                                        <h3><center><strong>{theNews.title}</strong></center></h3>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <div dangerouslySetInnerHTML={{ __html: theArticle }} />
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </React.Fragment>
                                    
                                )
                                
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}