import { useState } from 'react';
import { Container, Row, Col, Media, Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getEquips } from '../../shared/equipInfo';

const Equips = () => {
    //Obtain Equipment Data
    const equips = getEquips();

    //Search Query
    const [query, setQuery] = useState("");

    //Display Equipment Thumbnails

    return (
        <>
            <Container style={{marginTop: "5rem"}}>
                <Row>
                    <Card style={{backgroundColor: "#292930", color: "#e7f9fc", marginBottom: "2rem", padding: "0" }}>
                        <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0" }}>
                            <center><h3>Select an Equipment to view the Equipment's information</h3></center>
                        </CardHeader>
                        <CardBody>
                            <p><center>Please be aware that ALL equips are available, including equips only currently available in Japan.</center></p>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                    <center>
                        <input placeholder='Search Equipment Name'
                                onChange={e => setQuery(e.target.value)}
                                style={{
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
                    {
                        equips.filter(equip => {
                            if(query === "") {
                                return equip;
                            } else if (equip.name.toLowerCase().includes(query.toLowerCase())) {
                                return equip;
                            }
                        })
                        .map(equip => {
                            return (
                                <>
                                    <Col key={equip.name} xs="4" sm="auto">
                                        <center>
                                            <Card style={{maxWidth: "75px", backgroundColor: "#202022", border: "none"}}>
                                                <Link to={`/testingrealmofequips/equips/${equip.name}`} style={{textDecoration: "none", color: "#aaabb8"}} >
                                                    <Media src={equip.image.thumbmax} alt={equip.name} width="100%" height="auto" object-fit="cover" />
                                                    <p>{equip.name}</p>
                                                </Link>
                                            </Card>
                                        </center>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Equips;