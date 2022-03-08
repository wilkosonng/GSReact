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
