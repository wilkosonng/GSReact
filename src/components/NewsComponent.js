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
                <Card style={{backgroundColor: "#29648a", padding: "0"}}>
                    <CardHeader style={{padding: "0px"}}>
                        <h1><center><strong>Site News</strong></center></h1>
                    </CardHeader>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#464866", color: "#C5C6C7"}}>
                    <CardBody style={{padding: "0px", height: "100%", color: "#25274d"}}>
                        <Row>
                            <CardGroup style={{padding: "0px"}}>
                                {newsTopics.map(theNews => {
                                        if(theNews.new){
                                            return (
                                                <React.Fragment key={theNews.id}>
                                                    <Card style={{maxWidth: "1000rem", width: "100%", height: "500px", maxHeight: "700px" ,backgroundColor: "#25274d", color: "#29648a", padding: "0px", margin: "0px"}}>
                                                        <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8", padding: "0px", height: "80px"}}>
                                                        <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none', color: "#aaabb8"}} key={theNews.id}><center><h2>{theNews.title}</h2></center></Link>
                                                        </CardHeader>
                                                        <CardBody style={{marginTop: "30px"}}>
                                                            <center>
                                                                <img src={theNews.preview} alt="Preview Image" style={{maxWidth: "200px", width: "auto", height: "auto", maxHeight: "400px"}} />
                                                                <Link to={`/news/${theNews.id}`} style={{textDecoration: 'none', color: "#aaabb8"}} key={theNews.id}>
                                                                    <p style={{backgroundColor: "#29648a", color: "#aaabb8", maxWidth: "300px", width: "100%", height: "auto",marginTop: "2rem"}}>Read Article</p>
                                                                </Link>
                                                            </center>
                                                        </CardBody>
                                                    </Card>
                                                </React.Fragment>
                                            )
                                        }

                                    })}
                                <Card style={{backgroundColor: "#25274d", color: "#29648a", height: "500px", width: "100%", padding: "0px", margin: "0px"}}>
                                    <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8", padding: "0", height: "80px"}}><h2 style={{paddingTop: "15px"}}><center>Twitter Feed</center></h2></CardHeader>
                                    <CardBody style={{marginTop: "15px"}}>
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
                            </CardGroup>
                        </Row>
                        
                    </CardBody>
                </Card>
                </Row>
                <Row>
                    <Card style={{backgroundColor: "#25274d", color: "#29648a", padding: "0px"}}>
                        <CardHeader style={{backgroundColor: "#29648a", color: "#aaabb8", width: "100%", padding: "0px", margin: "0px"}}><center><h2>Discord</h2></center></CardHeader>
                        <CardBody style={{width :"100%", margin: "10px"}}>
                            <center>
                                Visit the Grand Summoners Official Discord for older news and Unit Reviews!
                                <br />
                                <a href="https://discord.gg/grandsummoners" id="discordLink">Click Here</a>
                            </center>
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