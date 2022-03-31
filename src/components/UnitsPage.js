import React, {useState} from 'react';
import { Container, Row, Col, Media, Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUnits } from '../shared/unitInfo';



export default function Units () {
    //Obtain Unit Data
    const units = getUnits();

    //Tooltip for Unit Names
    const [tooltip, setTooltip] = useState(false);

    //Display Unit Thumbnails
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <p><center><h3>Select a Unit to view the Unit's information.</h3></center></p>
                    <p><center>Please be aware that ALL units are available, including Units only available in Japan.</center></p>
                </Row>
                <Row>            
                    {units.map(unit => {
                        if(unit.image.thumbawk){
                            return (
                                <React.Fragment key={unit.name} >
                                    <Col>
                                        <center>
                                            <Link to={`/units/${unit.name}`} key={unit.name} style={{textDecoration: 'none'}}>
                                                <Media src={unit.image.thumbawk} alt={unit.name} width="75" height="75" object-fit="cover"  />
                                                <p>{unit.name}</p>
                                            </Link>
                                        </center>
                                    </Col>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={unit.name} >
                                <Col>
                                    <center>
                                        <Link to={`/units/${unit.name}`} key={unit.name}>
                                            <Media src={unit.image.thumb5} alt={unit.name} width="75" height="75" object-fit="cover" />
                                            <p>{unit.name}</p>
                                        </Link>
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

