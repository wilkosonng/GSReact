import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getNews } from '../shared/news/news';
import { Link } from 'react-router-dom';
import { CardColor } from './ColorScheme';

export default function News () {
    //Obtain Articles
    const newsTopics = getNews();

    //innerHTML usually unsafe, but there's no user-submitted content so no javascript injections
    //TODO: Create unique links for each article, then make a new component that displays the full article. Also limit card size to make a preview-like design
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#29648a"}}>
                    <CardHeader>
                        <h1><center><strong>Game News</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody>
                        <Card style={{backgroundColor:"#464866", color: "#C5C6C7", border: "none"}}>
                            <CardHeader style={{backgroundColor: "#aaabb8", color: "#29648a", marginBottom: "1rem"}}>
                                    <center><h1>Newest News</h1></center>
                            </CardHeader>
                        
                            {newsTopics.map(theNews => {
                                const theArticle = theNews.article;
                                if(theNews.new){
                                    return (
                                        <React.Fragment key={theNews.id}>
                                            <Col xs="12">
                                                <center>
                                                    <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none'}} key={theNews.id}>
                                                        <Card style={{height: "300px", maxWidth: "1000rem", backgroundColor: "#25274d", color: "#29648a", overflow: "hidden", marginBottom: "5rem"}}>
                                                            <CardHeader  style={{backgroundColor: "#29648a", color: "#aaabb8"}}>
                                                                <h3><center><strong>{theNews.title}</strong></center></h3>
                                                            </CardHeader>
                                                            <CardBody>
                                                                <center><div dangerouslySetInnerHTML={{ __html: theArticle }} /></center>
                                                            </CardBody>
                                                        </Card>
                                                    </Link>
                                                </center>
                                            </Col>
                                        </React.Fragment>
                                    )
                                }

                            })}
                            </Card>

                            <Card style={{backgroundColor:"#464866", color: "#C5C6C7", border: "none"}}>
                                <CardHeader style={{backgroundColor: "#aaabb8", color: "#29648a"}}>
                                    <center><h1>Older News</h1></center>
                                </CardHeader>
                                <CardBody>
                                <CardGroup>
                                    {newsTopics.map(theNews => {
                                    const theArticle = theNews.article;

                                    if(!theNews.new){
                                        return (
                                            <React.Fragment key={theNews.id}>
                                                <Col>
                                                    <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none'}} key={theNews.id}>
                                                        <Card style={{height: "300px", backgroundColor: "#25274d", color: "#29648a", overflow: "hidden", marginBottom: "1rem"}}>
                                                            <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8"}}>
                                                                <h3><center><strong>{theNews.title}</strong></center></h3>
                                                            </CardHeader>
                                                            <CardBody>
                                                                <center><div dangerouslySetInnerHTML={{ __html: theArticle }} /></center>
                                                            </CardBody>
                                                        </Card>
                                                    </Link>
                                                </Col>
                                            </React.Fragment>
                                        )
                                    }

                                    })}
                                </CardGroup>
                                </CardBody>
                            </Card>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}