import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { getUnits } from '../shared/unitInfo';


class Units extends Component {
    constructor(props) {
        super(props);
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Units;