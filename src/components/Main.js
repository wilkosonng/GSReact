import React, { Component } from 'react';
import { UnitInformation } from '../shared/unitInfo';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Units from './UnitsPage';
import UnitDetails from './UnitComponent';

//Use this file to conglomerate all the pages

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: UnitInformation
        };
    }

    render() {
/*
        const UnitName = ({match}) => {
            return (
                <UnitPage units={this.props.units.filter(units => units.name === +match.params.name)[0]} />

            );
        }; */

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/units' render={() => <Units units={this.state.units} /> } />
                </Switch>
                
            </div>
        );
    }
}

export default Main;