import React, { Component } from 'react';
import { unitInformation } from '../shared/unitInfo';
import Header from './HeaderComponent';
import Units from './UnitsPage';

//Use this file to conglomerate all the pages

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: unitInformation
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Units units={this.state.units}/>
            </div>
        );
    }
}

export default Main;