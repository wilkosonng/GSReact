import React, { Component } from 'react';
import Header from './HeaderComponent';
import Units from './UnitsPage';
import UnitDetails from './UnitComponent';


//Use this file to conglomerate all the pages

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main;