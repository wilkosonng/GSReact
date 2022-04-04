import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getUnits } from '../shared/unitInfo';

const cardHeaderColor = {
    backgroundColor: "#29648a",
    color: "aaabb8"
}

const cardTierColor = {
    backgroundColor: "#25274d",
    borderColor: "#29648a"
}
export default function Tierlist() {
    //Obtain Unit Data
    const units = getUnits();

    //TODO: Add Hook to change Height of tier rankings based on viewport
    //Show each row units based on rank https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
    return (
        <Container>
            <Row>
                <Card style={{backgroundColor: "#464866"}}>
                    <CardHeader>
                        <h1><center><strong>Global Tierlist</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                            <Card style={cardHeaderColor}>
                                <CardHeader style={cardHeaderColor}>
                                    <center><h4>LEGEND</h4></center>
                                </CardHeader>
                                <CardBody style={{backgroundColor: "#464866"}}>
                                    <center>
                                        <p><img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px"}} /> True Weapon Favorability (Bumped up 0-2 Subtiers)</p>
                                        <p><img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px"}} /> True Weapon Reliance (Bumped up 2+ subtiers)</p>
                                        <p><img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px"}} /> Notable Cross Arts Synergy</p>
                                    </center>
                                </CardBody>
                            </Card>
                            <Card style={cardHeaderColor}>
                                <CardHeader>
                                    <center><h4>NOTE</h4></center>
                                </CardHeader>
                                <CardBody style={{backgroundColor: "#464866"}}>
                                    <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. Each unit may have their own niche, even the lower ranking units</center></p>
                                    <p><center>This is simply meant to show the general analysis of each unit. Rankings were determined by top players from the Official Discord.</center></p>
                                </CardBody>
                            </Card>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f291c5"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SSS</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "SSS"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#ffc5cf"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>SS</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "SS"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#ff97a8"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S+</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "S+"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", height: "100%", backgroundColor:"#f15b74"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "S"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#cf364f"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>S-</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "S-"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f6b990"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A+</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "A+"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                            
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f2985c"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "A"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#e8731a"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>A-</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "A-"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f2d45c"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B+</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "B+"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                        
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#ebac36"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "B"){
                                                return (
                                                    <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                )
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#e8faac"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>B-</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "B-"){
                                                if(units.image.thumbawk) {
                                                    return (
                                                        <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                    )
                                                }
                                                return (
                                                    <DisplayFiveStar unit={units} cardColor="#2e2e2e" />
                                                )
                                                
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#4cbd5d"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>C</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "C"){
                                                if(units.image.thumbawk) {
                                                    return (
                                                        <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                    )
                                                }
                                                return (
                                                    <DisplayFiveStar unit={units} cardColor="#2e2e2e" />
                                                ) 
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#7ecff2"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>F</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "F"){
                                                if(units.image.thumbawk) {
                                                    return (
                                                        <DisplayUnit unit={units} cardColor="#2e2e2e" />
                                                    )
                                                }
                                                return (
                                                    <DisplayFiveStar unit={units} cardColor="#2e2e2e" />
                                                ) 
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#d092f4"}}>
                                        <center><strong style={{fontSize: "40px", webkitTextStroke: "2px black"}}>TBD</strong></center>
                                    </Card>
                                </td>
                                <td>
                                    <CardGroup>
                                        {units.map(units => {
                                            if(units.rank === "TBD"){
                                                if(units.image.thumbawk) {
                                                    return (
                                                        <DisplayUnit unit={units} cardColor="cardTierColor" />
                                                    )
                                                }
                                                return (
                                                    <DisplayFiveStar unit={units} cardColor="cardTierColor" />
                                                ) 
                                            }
                                        })}
                                    </CardGroup>
                                </td>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
    
}

const thumbnailSize = {
    height: 75,
    width: 75,
};

function DisplayUnit({unit}) {
    if(unit.twrequire){
        if(unit.twrequire === "reliance"){
            return (
                <Col lg="auto">
                <Card style={{border: "none", width: "90px", backgroundColor: "#25274d"}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8"}}>
                                {unit.name}
                            </p>
                            <img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }
        if(unit.name === "Luahn") {
            return (
                <Col lg="auto">
                <Card style={{border: "none", width: "90px", backgroundColor: "#25274d"}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <p style={{marginBottom: "0px", color: "#aaabb8"}}>{unit.name}</p>
                            <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                            <img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px", paddingBottom: "2px", marginBottom: "2px"}} />
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }

        return (
            <Col lg="auto">
            <Card style={{border: "none", width: "90px", backgroundColor: "#25274d"}}>
                <center>
                    <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                        <br />
                        <p style={{paddingTop: "0px", marginTop: "0px", marginBottom: "0px", color: "#aaabb8"}}>{unit.name}</p>
                        <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "0px"}} />
                    </a>
                </center>
            </Card>
            </Col>
        )
    }

    return (
        <Col lg="auto">
        <Card style={{border: "none", width: "90px", backgroundColor: "#25274d"}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8"}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}

//If Unit does not have Awk
function DisplayFiveStar({unit}) {
    //No TW favorability
    return (
        <Col lg="auto">
        <Card style={{border: "none", width: "90px", backgroundColor: "#25274d"}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumb5} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8"}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}
