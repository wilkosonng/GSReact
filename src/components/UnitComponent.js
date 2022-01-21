import React, { useState, useEffect } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Nav, NavItem, NavLink, Badge, TabContent, TabPane} from 'reactstrap';
import '../index.css';
import { useParams } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';

function UnitDetails () {
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName);

    return (
        <React.Fragment>
            <p>Show Params {selectedUnit.unitName}</p>
            <Nav tabs justified>
                <NavItem>
                    <NavLink href="#stats" active>Stats</NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink href="#trueweapon">True Weapon</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#lore">Lore</NavLink>
                </NavItem>
            </Nav>
            <TabContent>
                <TabPane id="stats">   
                    <RenderStats unitStats={units.stats} detail={units.image.detail} 
                        unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} />
                </TabPane>
                <TabPane id="trueweapon">

                </TabPane>
                <TabPane id="lore">

                </TabPane>
            </TabContent>
        </React.Fragment>
    )
}

function RenderStats({unitStats, unitAtt, unitType, detail, unitSkill}){
    //Modal Tab for Stats
    if(unitStats){
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                        <Media src={detail} className="unitDetail" />
                </div>
                <div className="row">
                    <div className="col">
                        <p><i>{unitAtt} , {unitType}</i></p>
                        <p>HP - {unitStats.hp} <Badge color="info">{unitStats.hpplus}</Badge></p>
                        <p>ATK - {unitStats.atk} <Badge color="info">{unitStats.atkplus}</Badge></p>
                        <p>DEF - {unitStats.def} <Badge color="info">{unitStats.defplus}</Badge></p>
                    </div>
                    <div className="col">
                        <strong>SKILL</strong>
                        <p><Badge color="secondary">BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                    </div>
                </div>
            </div>
        );
    }
    return <div />
}

function RenderTrue({unitTrue}) {
    //Modal Tab for True Weapon
}

function RenderLore({unitLore}) {
    //Modal Tab for Lore
}

export default UnitDetails;