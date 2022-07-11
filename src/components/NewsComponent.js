import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { StyledComponent } from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { getNews } from '../shared/news/news';
import { Link } from 'react-router-dom';

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
                        <h1><center><strong>Site News</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody>
                        <Row>
                            <Col>
                                <Card style={{backgroundColor:"#464866", color: "#C5C6C7", border: "none"}}>
                                    {newsTopics.map(theNews => {
                                        if(theNews.new){
                                            return (
                                                <React.Fragment key={theNews.id}>
                                                    <Col>
                                                            <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none'}} key={theNews.id}>
                                                                <Card style={{maxWidth: "1000rem", width: "100%", height: "auto", maxHeight: "700px" ,backgroundColor: "#25274d", color: "#29648a", marginBottom: "2rem"}}>
                                                                    <CardHeader  style={{backgroundColor: "#29648a", color: "#aaabb8", padding: "0px"}}>
                                                                        <Container>
                                                                        <Row>
                                                                            <Col lg="auto">
                                                                                <p style={{fontSize: "20px", marginLeft: "0rem", paddingBottom: "0px"}}><strong>[{theNews.category}]</strong></p>
                                                                                <p style={{}}><center><h4>{theNews.title}</h4></center></p>
                                                                            </Col>
                                                                            <Col lg="auto">
                                                                                <p style={{float: "right"}}>{theNews.date}</p>
                                                                            </Col>
                                                                        </Row>
                                                                        </Container>
                                                                    </CardHeader>
                                                                    <CardBody>
                                                                        <center>
                                                                            <img src={theNews.preview} alt="Preview Image" style={{maxWidth: "200px", width: "auto", height: "auto", maxHeight: "400px"}} />
                                                                            <p style={{backgroundColor: "#29648a", color: "#aaabb8", maxWidth: "300px", width: "100%", height: "auto",marginTop: "2rem"}}>Read Article</p>
                                                                        </center>
                                                                    </CardBody>
                                                                </Card>
                                                            </Link>
                                                    </Col>
                                                </React.Fragment>
                                            )
                                        }

                                    })}
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{backgroundColor: "#25274d", color: "#29648a", maxHeight: "500px"}}>
                                    <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8"}}><h2><center>Twitter Feed</center></h2></CardHeader>
                                    <CardBody>
                                        <center>
                                            <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName="GRDSMN_GLOBAL"
                                            theme="dark"
                                            noHeader="true"
                                            noFooter="true" 
                                            options={{height: "335px", maxHeight: "700px"}}/>
                                        </center>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Card style={{backgroundColor: "#25274d", color: "#29648a", maxHeight: "500px"}}>
                                <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8"}}><center><h2>Discord</h2></center></CardHeader>
                                <CardBody>
                                    <center>
                                        Visit the Grand Summoners Official Discord for older news and Unit Reviews!
                                        <br />
                                        <a href="https://discord.gg/grandsummoners" id="discordLink">Click Here</a>
                                    </center>
                                </CardBody>
                            </Card>
                        </Row>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

/**
 * Old News 
 * <Card style={{backgroundColor:"#464866", color: "#C5C6C7", border: "none"}}>
                                <CardBody>
                                <CardGroup>
                                    {newsTopics.map(theNews => {

                                    if(!theNews.new){
                                        return (
                                            <React.Fragment key={theNews.id}>
                                                <Col>
                                                    <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none'}} key={theNews.id}>
                                                        <Card style={{height: "auto", backgroundColor: "#25274d", color: "#aaabb8", marginBottom: "1rem"}}>
                                                                <p style={{float: "left", fontSize: "20px", marginLeft: "1rem"}}><strong>[{theNews.category}]</strong> <span style={{float:"right", fontSize: "14px", marginRight: "2rem"}}>{theNews.date}</span></p>
                                                                <p style={{marginTop: "1rem"}}><center><h3>{theNews.title}</h3></center></p>
                                                                <center><p style={{backgroundColor: "#29648a", color: "#aaabb8", maxWidth: "150px", float: "right", marginTop: "3rem", marginRight: "1rem", width: "100%", height: "auto"}}>Read More</p></center>
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
 */