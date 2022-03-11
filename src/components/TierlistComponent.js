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
                <Card style={{backgroundColor: "gray"}}>
                    <CardHeader>
                        <h1><center><strong>Global Tierlist</strong></center></h1>
                    </CardHeader>
                    <CardBody>

                            <Card style={{backgroundColor: "gray"}}>
                                <CardHeader>
                                    <center><h4>LEGEND</h4></center>
                                </CardHeader>
                                <CardBody>
                                    <center>
                                        <p><img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px"}} /> True Weapon Favorability (Bumped up 0-2 Subtiers)</p>
                                        <p><img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px"}} /> True Weapon Reliance (Bumped up 2+ subtiers)</p>
                                        <p><img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px"}} /> Notable Cross Arts Synergy</p>
                                    </center>
                                </CardBody>
                            </Card>
                            <Card style={{backgroundColor: "gray"}}>
                                <CardHeader>
                                    <center><h4>NOTE</h4></center>
                                </CardHeader>
                                <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. Each unit may have their own niche, even the lower ranking units</center></p>
                                <p><center>This is simply meant to show the general analysis of each unit. Rankings were determined by top players from the Official Discord.</center></p>
                            </Card>
                    </CardBody>
                </Card>
                
                
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f291c5"}}>
                    <CardBody>
                        <CardGroup>
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SSS</strong></center>
                                </Card>
                            </Col>
                        
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SS</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S+</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S-</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A+</strong></center>
                                </Card>
                            </Col>
                            
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A-</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B+</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B-</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>C</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>F</strong></center>
                                </Card>
                            </Col>
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
                            <Col lg="1">
                                <Card style={{width: "90px", backgroundColor:"#2e2e2e"}}>
                                    <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>TBD</strong></center>
                                </Card>
                            </Col>
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
    if(unit.twrequire){
        if(unit.twrequire === "reliance"){
            return (
                <Col lg="1">
                <Card style={{border: "none", width: "90px", backgroundColor: cardColor}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "black"}}>
                                {unit.name}
                            </p>
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }
        if(unit.name === "Luahn") {
            return (
                <Col lg="1">
                <Card style={{border: "none", width: "90px", backgroundColor: cardColor}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                            <img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "black"}}>{unit.name}</p>
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }

        return (
            <Col lg="1">
            <Card style={{border: "none", width: "90px", backgroundColor: cardColor}}>
                <center>
                    <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                        <br />
                        <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "0px"}} />
                        <p style={{paddingTop: "0px", paddingBottom: "2px", marginTop: "0px", marginBottom: "2px", color: "black"}}>{unit.name}</p>
                    </a>
                </center>
            </Card>
            </Col>
        )
    }

    return (
        <Col lg="1">
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
    //No TW favorability
    return (
        <Col lg="1">
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
