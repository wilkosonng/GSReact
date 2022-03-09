import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
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
                <Card style={{backgroundColor:"#f291c5"}}>
                    <CardBody>
                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SSS | </strong>
                            {units.map(units => {
                                if(units.rank === "SSS"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ffc5cf"}}>
                <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SS | </strong>
                            {units.map(units => {
                                if(units.rank === "SS"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ff97a8"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S+ | </strong>
                            {units.map(units => {
                                if(units.rank === "S+"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f15b74"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S | </strong>
                            {units.map(units => {
                                if(units.rank === "S"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#cf364f"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S- | </strong>
                            {units.map(units => {
                                if(units.rank === "S-"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f6b990"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A+ | </strong>
                            {units.map(units => {
                                if(units.rank === "A+"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f2985c"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A | </strong>
                            {units.map(units => {
                                if(units.rank === "A"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#e8731a"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A- | </strong>
                            {units.map(units => {
                                if(units.rank === "A-"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#f2d45c"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B+ | </strong>
                            {units.map(units => {
                                if(units.rank === "B+"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#ebac36"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B | </strong>
                            {units.map(units => {
                                if(units.rank === "B"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#e8faac"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B- | </strong>
                            {units.map(units => {
                                if(units.rank === "B-"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#4cbd5d"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>C | </strong>
                            {units.map(units => {
                                if(units.rank === "C"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#7ecff2"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>F | </strong>
                            {units.map(units => {
                                if(units.rank === "F"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={{backgroundColor:"#d092f4"}}>
                    <CardBody>
                        <center>
                        <strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>TBD | </strong>
                            {units.map(units => {
                                if(units.rank === "TBD"){
                                    return (
                                        <DisplayUnit unit={units} />
                                    )
                                }
                            })}
                        </center>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
    
}

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75
};

function DisplayUnit({unit}) {
    return (
        <a href={`/units/${unit.name}`} >
            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
        </a>
    )
}
