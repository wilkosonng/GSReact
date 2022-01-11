import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function Units(props) {

    const units = props.units.map(unit => {
            return (
                <React.Fragment key={unit.name}>
                    <RenderThumbnails units={unit}  />
                </React.Fragment>
            );
        })

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">            
                        {units}
                    </div>
                </div>
            </React.Fragment>
        );
}

function RenderThumbnails ({units}) {
    if(units) {
        return (
            <React.Fragment>
                <Link to={`/unit/${units.name}`}>
                    <Media src={units.image.thumbawk} alt={units.name} width="75" height="75" />
                </Link>
            </React.Fragment>
        );
    }
    return <div />
}

export default Units;