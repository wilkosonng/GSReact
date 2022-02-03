import React, { useState, useEffect } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Badge } from 'reactstrap';
import '../index.css';
import { useParams, Link, Routes, Route, Outlet } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';

function UnitDetails () {
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName);

    /*TODO: Fix tabbing spacing
    Also, Nest Stats and True WEapon under lore so evolution can be toggled?
    If Lore Information, Index under / , then put child path under it to toggled #?*/
    return (
        <React.Fragment>
            <nav>
                <Link to="" activeClassName="active">Lore</Link>
                <Link to="stats" activeClassName="active">Stats</Link>
                <Link to="trueweapon" activeClassName="active">True Weapon</Link>
            </nav>
            

            <div>
                <Routes>
                    <Route path="/" element={<React.Fragment>
                        <RenderDetail detail={units.image.detail} />
                        <RenderLore unitLore={units.lore} unitImage={units.image} /></React.Fragment>} >
                            <Route index />
                            <Route path="twostar" element={<RenderTwoStar lore={units.lore.evo2} />} />
                            <Route path="threestar" element={<RenderThreeStar lore={units.lore.evo3} />} />
                            <Route path="fourstar" element={<RenderFourStar lore={units.lore.evo4} />} />
                            <Route path="fivestar" element={<RenderFiveStar lore={units.lore.evo5} />} />
                            <Route path="awaken" element={<RenderAwaken lore={units.lore.evoawk} />} />
                    </Route>
                    <Route path="stats" element={<RenderStats unitStats={units.stats} 
                        unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} />} />
                    <Route path="trueweapon" element={<RenderTrue unitTrue={units.trueweapon} truePassive={units.trueweapon.passive} />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

function RenderDetail({detail}){
    //Shows the Unit Detail
    return(
            <div className="row justify-content-md-center">
                        <Media src={detail} className="unitDetail" />
            </div>
    )
}

function RenderLore({unitLore, unitImage}) {
    //Use If statements to check if unitlore.evo# exists? , then display information? https://ui.dev/react-router-nested-routes/
    //Redo Links as NAvbars?
    //Check down list and return based on the earliest available evolution
    if(unitLore.evo2) {
        return (
            <React.Fragment>
                <nav>
                    <Link to="twostar" activeClassName="active">
                        <Media src={unitImage.thumb2} />
                    </Link>
                    <Link to="threestar" activeClassName="active">
                        <Media src={unitImage.thumb3} />
                    </Link>
                    <Link to="fourstar" activeClassName="active">
                        <Media src={unitImage.thumb4} />
                    </Link>
                    <Link to="fivestar" activeClassName="active">
                        <Media src={unitImage.thumb5} />
                    </Link>
                    <Link to="awaken" activeClassName="active">
                        <Media src={unitImage.thumbawk} />
                    </Link>
                </nav>
                <Outlet />
            </React.Fragment>

        )
    }

    if(unitLore.evo3) {
        return (
            <React.Fragment>
                <nav>
                    <Link to="threestar" activeClassName="active">
                        <Media src={unitImage.thumb3} />
                    </Link>
                    <Link to="fourstar" activeClassName="active">
                        <Media src={unitImage.thumb4} />
                    </Link>
                    <Link to="fivestar" activeClassName="active">
                        <Media src={unitImage.thumb5} />
                    </Link>
                    <Link to="awaken" activeClassName="active">
                        <Media src={unitImage.thumbawk} />
                    </Link>
                </nav>
                <Outlet />
            </React.Fragment>

        )
    }

    if(unitLore.evo4) {
        return (
            <React.Fragment>
                <nav>
                    <Link to="fourstar" activeClassName="active">
                        <Media src={unitImage.thumb4} />
                    </Link>
                    <Link to="fivestar" activeClassName="active">
                        <Media src={unitImage.thumb5} />
                    </Link>
                    <Link to="awaken" activeClassName="active">
                        <Media src={unitImage.thumbawk} />
                    </Link>
                </nav>
                <Outlet />
            </React.Fragment>

        )
    }

    if(unitLore.evo5) {
        return (
            <React.Fragment>
                <nav>
                    <Link to="fivestar" activeClassName="active">
                        <Media src={unitImage.thumb5} />
                    </Link>
                    <Link to="awaken" activeClassName="active">
                        <Media src={unitImage.thumbawk} />
                    </Link>
                </nav>
                <Outlet />
            </React.Fragment>

        )
    }

}

function RenderTwoStar({lore}) {
    return (
        <p>{lore}</p>
    )
}

function RenderThreeStar({lore}) {
    return (
        <p>{lore}</p>
    )
}

function RenderFourStar({lore}) {
    return (
        <p>{lore}</p>
    )
}

function RenderFiveStar({lore}) {
    return(
        <p>{lore}</p>
    )
}

function RenderAwaken({lore}) {
    return (
        <p>{lore}</p>
    )
}

function RenderStats({unitStats, unitAtt, unitType, unitSkill}){
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



export default UnitDetails;
