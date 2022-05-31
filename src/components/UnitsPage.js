import React, {useState} from 'react';
import { Container, Row, Col, Media, Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUnits } from '../shared/unitInfo';
import styled from 'styled-components';

//Styled Component currently not working
const HoverName = styled.p`
    color: "#aaabb8";
    margin-top: "0rem";
    &:hover{
        background-color: "#2e9cca"
    }
`


export default function Units () {
    //Obtain Unit Data
    const units = getUnits();

    //Tooltip for Unit Names
    const [query, setQuery] = useState("");

    //Display Unit Thumbnails
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Card style={{backgroundColor: "#29648a", color: "aaabb8", marginBottom: "2rem"}}>
                        <CardHeader style={{backgroundColor: "#29648a", color: "aaabb8"}}>
                            <p><center><h3>Select a Unit to view the Unit's information.</h3></center></p>
                        </CardHeader>
                        <CardBody style={{backgroundColor: "#464866", marginBottom: "1rem"}}>
                            <p><center>Please be aware that ALL units are available, including Units only available in Japan.</center></p>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <center>
                        <input placeholder="Search Unit Name" onChange={e => setQuery(e.target.value)} style={{
                            display: "flex",
                            width: "100%",
                            maxWidth: "790px",
                            height: "auto",
                            marginBottom: "2rem",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }} />
                    </center>
                </Row>
                <Row>            
                    {units.filter(unit => {
                        if(query === ''){
                            return unit;
                        } else if (unit.name.toLowerCase().includes(query.toLowerCase())) {
                            return unit;
                        }
                    })
                    .map(unit => {
                        if(unit.image.thumbawk){
                            return (
                                <React.Fragment key={unit.name} >
                                    <Col xs="4" sm="auto">
                                        <center>
                                            <Card style={{maxWidth: "75px", backgroundColor: "#25274d", border: "none"}}>
                                                <Link to={`/units/${unit.name}`} key={unit.name} style={{textDecoration: 'none', color: "#aaabb8"}}>
                                                    <Media src={unit.image.thumbawk} alt={unit.name} width="100%" height="auto" object-fit="cover"  />
                                                    <p>{unit.name}</p>
                                                </Link>
                                            </Card>
                                        </center>
                                    </Col>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={unit.name} >
                                <Col xs="4" sm="auto">
                                    <center>
                                        <Card style={{maxWidth: "75px", backgroundColor: "#25274d", border: "none"}}>
                                            <Link to={`/units/${unit.name}`} key={unit.name} style={{textDecoration: 'none', color: "#aaabb8"}}>
                                                <Media src={unit.image.thumb5} alt={unit.name} width="75" height="75" object-fit="cover" />
                                                <HoverName>{unit.name}</HoverName>
                                            </Link>
                                        </Card>
                                    </center>
                                </Col>
                                
                            </React.Fragment>
                        );
                        
                    })}

                </Row>
            </Container>
        </React.Fragment>
    );
}

