import React, { Component } from 'react';
import { getUnits } from '../shared/unitInfo';
import { Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Units from './UnitsPage';
import UnitDetails from './UnitComponent';


//Use this file to conglomerate all the pages

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const UnitName = ({match}) => {
            return (
                <UnitDetails units={this.props.units.filter(units => units.name === +match.params.name)[0]} />

            );
        }; 

        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main;