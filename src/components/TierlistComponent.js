import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getUnits } from '../shared/unitInfo';

export default function Tierlist() {
    //Obtain Unit Data
    const units = getUnits();

    //Show each row units based on rank
    return (
        <Container>
            <Row>
                <h1><center><strong>Global Tierlist</strong></center></h1>
                <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. This is simply meant to show the general analysis of each unit. Rankings were determined by top players from the Official Discord.</center></p>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f291c5", maxHeight: "125px"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SSS |&nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "SSS"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#f291c5" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ffc5cf", }}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SS |&nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "SS"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#ffc5cf" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ff97a8"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S+ |&nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "S+"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#ff97a8" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f15b74"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "S"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#f15b74" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#cf364f"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S- | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "S-"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#cf364f" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f6b990"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A+ | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "A+"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#f6b990" />
                                    )
                                }
                                
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f2985c"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "A"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#f2985c" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#e8731a"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A- | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "A-"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#e8731a" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f2d45c"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B+ | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "B+"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#f2d45c" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ebac36"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "B"){
                                    return (
                                        <DisplayUnit unit={units} cardColor="#ebac36" />
                                    )
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#e8faac"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B- | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "B-"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} cardColor="#e8faac" />
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} cardColor="#e8faac" />
                                    )
                                    
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#4cbd5d"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>C | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "C"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} cardColor="#4cbd5d" />
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} cardColor="#4cbd5d" />
                                    ) 
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#7ecff2"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>F | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "F"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} cardColor="#7ecff2" />
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} cardColor="#7ecff2" />
                                    ) 
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#d092f4"}}>
                    <CardBody>
                        <CardGroup>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>TBD | &nbsp;</strong>
                            {units.map(units => {
                                if(units.rank === "TBD"){
                                    if(units.image.thumbawk) {
                                        return (
                                            <DisplayUnit unit={units} cardColor="#d092f4" />
                                        )
                                    }
                                    return (
                                        <DisplayFiveStar unit={units} cardColor="#d092f4" />
                                    ) 
                                }
                            })}
                        </CardGroup>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
    
}

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75,
};

function DisplayUnit({unit, cardColor}) {
    return (
        <Col m="1">
        <Card style={{border: "none", width: "90px", backgroundColor: cardColor}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "2px", marginBottom: "2px", color: "black"}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}

//If Unit does not have Awk
function DisplayFiveStar({unit, cardColor}) {
    return (
        <Col m="1">
        <Card style={{border: "none", width: "90px", backgroundColor: cardColor}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumb5} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "2px", marginBottom: "2px", color: "black"}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}
