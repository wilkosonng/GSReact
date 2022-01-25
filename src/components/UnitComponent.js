import React, { useState, useEffect } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Nav, NavItem, NavLink, Badge, TabContent, TabPane, Modal} from 'reactstrap';
import '../index.css';
import { useParams } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';

function UnitDetails () {
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName);
    
    return (
        <React.Fragment>
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
                    <RenderTrue unitTrue={units.trueweapon} truePassive={units.trueweapon.passive} />
                </TabPane>
                <TabPane id="lore">

                </TabPane>
            </TabContent>
        </React.Fragment>
    )
}

function RenderStats({unitStats, unitAtt, unitType, detail, unitSkill}){
    //Tab for Stats
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

function RenderTrue({unitTrue, truePassive}) {
    //Tab for True Weapon
    //POSSIBLY might need to add Map to Passives
    if(unitTrue){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p>NAME: {unitTrue.name}</p>
                        <p>SKILL: {unitTrue.skill} <Badge color="secondary">BREAK {unitTrue.skillbreak}</Badge></p>
                        <p>PASSIVES: 
                            <ul>
                                <li>{truePassive.ability1}</li>
                                <li>{truePassive.ability2}</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

function RenderLore({unitLore}) {
    //Modal Tab for Lore
}

export default UnitDetails;