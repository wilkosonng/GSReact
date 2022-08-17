import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import { getUnits } from '../shared/unitInfo';

const cardHeaderColor = {
    backgroundColor: "#22bbff", 
    color: "#292930"
}

const cardTierColor = {
    backgroundColor: "#292930"
}

const rankSize = {
    fontSize: "60px", 
    webkitTextStroke: "1px black"
}

export default function Tierlist() {
    //Obtain Unit Data
    const units = getUnits();

    //TODO: Add Hook to change Height of tier rankings based on viewport
    //Potentially try Colspan or Rowspan for Mobile?
    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                    <CardHeader>
                        <h1><center><strong>Global Tierlist</strong></center></h1>
                    </CardHeader>
                    <CardBody>
                            <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                                <CardHeader style={cardHeaderColor}>
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
                            <Card style={{backgroundColor: "#292930", color: "#e7f9fc", padding: "0px"}}>
                                <CardHeader style={cardHeaderColor}>
                                    <center><h4>NOTE</h4></center>
                                </CardHeader>
                                <CardBody>
                                    <p><center>This tierlist is for GLOBAL units only. Do <strong>not</strong> consider this gospel. Each unit may have their own niche, even the lower ranking units</center></p>
                                    <p><center>This is simply meant to show the general analysis of each unit. Rankings were determined by players from the Grand Summoners 
                                        <a href="https://discord.gg/grandsummoners">Official Discord</a> Server Staff.</center></p>
                                </CardBody>
                            </Card>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card style={cardTierColor}>
                    <CardBody>
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "100%", height: "100%", backgroundColor:"#f291c5", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>SSS</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#ffc5cf", height: "100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>SS</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px",height: "100%", backgroundColor:"#ff97a8", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>S+</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", height: "100%", backgroundColor:"#f15b74", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>S</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", height: "100%", backgroundColor:"#cf364f", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>S-</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f6b990", height: "100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>A+</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f2985c", height: "100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>A</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#e8731a", height: "100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>A-</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#f2d45c", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>B+</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#ebac36", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>B</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#e8faac", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>B-</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#4cbd5d", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>C</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "90px", backgroundColor:"#7ecff2", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>F</strong></center>
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
                        <table style={{height: "100%"}}>
                            <tr>
                                <td>
                                    <Card style={{width: "100%", backgroundColor:"#d092f4", height:"100%", justifyContent: "center", alignItems: "center"}}>
                                        <center><strong style={rankSize}>TBD</strong></center>
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
                <Col md="auto" xs="3">
                <Card style={{border: "none", width: "90px", backgroundColor: "#292930"}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <p style={{paddingBottom: "2px", marginBottom: "2px", color: "#aaabb8"}}>
                                {unit.name}
                            </p>
                            <img src="/db/Icons/skill/thumbnail/skill5.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} />
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }
        if(unit.name === "Luahn") {
            return (
                <Col md="auto" xs="4">
                <Card style={{border: "none", width: "90px", backgroundColor: "#292930"}}>
                    <center>
                        <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                            <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                            <br />
                            <p style={{marginBottom: "0px", color: "#aaabb8"}}>{unit.name}</p>
                            <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} />
                            <img src="/db/Icons/skill/thumbnail/damage_up.png" style={{maxWidth: "20px", paddingBottom: "0px", marginBottom: "2rem"}} />
                        </a>
                    </center>
                </Card>
                </Col>
            )
        }

        return (
            <Col md="auto">
            <Card style={{border: "none", width: "90px", backgroundColor: "#292930"}}>
                <center>
                    <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                        <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                        <br />
                        <p style={{paddingTop: "0px", marginTop: "0px", marginBottom: "0px", color: "#aaabb8"}}>{unit.name}</p>
                        <img src="/db/Icons/skill/thumbnail/skill0.png" style={{maxWidth: "20px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "2rem"}} />
                    </a>
                </center>
            </Card>
            </Col>
        )
    }

    return (
        <Col md="auto" xs="3">
        <Card style={{border: "none", width: "90px", backgroundColor: "#292930"}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumbawk} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "0px", marginBottom: "2px", color: "#aaabb8"}}>{unit.name}</p>
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
        <Col md="auto" xs="3">
        <Card style={{border: "none", width: "90px", backgroundColor: "#292930"}}>
            <center>
                <a href={`/units/${unit.name}`} style={{textDecoration: "none"}}>
                    <img src={unit.image.thumb5} style={thumbnailSize} object-fit="cover" />
                    <p style={{paddingBottom: "0px", marginBottom: "2px", color: "#aaabb8"}}>{unit.name}</p>
                </a>
            </center>
        </Card>
        </Col>
    )
}
