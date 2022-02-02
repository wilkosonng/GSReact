import React, { useState, useEffect } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Nav, NavItem, NavLink, Badge, TabContent, TabPane} from 'reactstrap';
import '../index.css';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';

function UnitDetails () {
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName);

    /*TODO: Fix tabbing spacing
    Also, Nest Stats and True WEapon under lore so evolution can be toggled?
    If Lore Information, Index under / , then put child path under it to toggled #?*/
    return (
        <React.Fragment>
            <Link to="" activeClassName="active">Lore</Link>
            <Link to="stats" activeClassName="active">Stats</Link>
            <Link to="trueweapon" activeClassName="active">True Weapon</Link>

            <div>
                <Routes>
                    <Route path="/" element={<RenderLore unitLore={units.lore} detail={units.image.detail} />} />
                    <Route path="stats" element={<RenderStats unitStats={units.stats} 
                        unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} />} />
                    <Route path="trueweapon" element={<RenderTrue unitTrue={units.trueweapon} truePassive={units.trueweapon.passive} />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

function RenderStats({unitStats, unitAtt, unitType, detail, unitSkill}){
    //Tab for Stats
    if(unitStats){
        return (
            <div className="container-fluid">
                
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
    //POSSIBLY might need to add if statements to check to Passives based on amount
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

function RenderLore({unitLore, detail}) {
    //Use If statements to check if unitlore.evo# exists? , then display information? https://ui.dev/react-router-nested-routes/
    return(
        <div>
            <div className="row justify-content-md-center">
                        <Media src={detail} className="unitDetail" />
            </div>
            <div>
                <p>{unitLore.evo2}</p>
            </div>
        </div>
    )
}

export default UnitDetails;
