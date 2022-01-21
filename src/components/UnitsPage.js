import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link, Outlet } from 'react-router-dom';
import { UnitDetails } from './UnitComponent';
import { Component } from 'react/cjs/react.production.min';
import { getUnits } from '../shared/unitInfo';


class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUnit: null
        };
    }

    onSelectUnit(unit){
        this.setState({selectedUnit: unit});
    }


    render() {
        const units = getUnits();

        //Display Unit Thumbnails
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">            
                        {units.map(unit => {
                            return (
                                <React.Fragment key={unit.name} >
                                    <Link to={`/units/${unit.name}`} key={unit.name}>
                                        <Media src={unit.image.thumbawk} alt={unit.name} width="75" height="75" />
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                        <Outlet />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Units;