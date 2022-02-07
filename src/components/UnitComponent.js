import React, { useState, useEffect } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Badge, Container, Row, Col } from 'reactstrap';
import '../index.css';
import { useParams, Link, Routes, Route, Outlet } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

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
            

            <Container>
                <Routes>
                    <Route path="/" element={<React.Fragment>  
                        <RenderLore unitLore={units.lore} unitImage={units.image} />
                        </React.Fragment>} >
                            <Route index />
                            <Route path="twostar" element={<RenderTwoStar lore={units.lore.evo2} unitImage={units.image} />} />
                            <Route path="threestar" element={<RenderThreeStar lore={units.lore.evo3} unitImage={units.image} />} />
                            <Route path="fourstar" element={<RenderFourStar lore={units.lore.evo4} unitImage={units.image} />} />
                            <Route path="fivestar" element={<RenderFiveStar lore={units.lore.evo5} unitImage={units.image} />} />
                            <Route path="awaken" element={<RenderAwaken lore={units.lore.evoawk} unitImage={units.image} />} />
                    </Route>
                    <Route path="stats" element={<React.Fragment>
                                                    <RenderDetail detail={units.image.detail} />
                                                    <RenderStats unitName={units.name} unitStats={units.stats} 
                                                    unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} unitPassive={units.passive}/>
                                                    </React.Fragment>} />
                    <Route path="trueweapon" element={<RenderTrue unitTrue={units.trueweapon} truePassive={units.trueweapon.passive} trueImage={units.trueweapon.detail} />} />
                </Routes>
            </Container>
        </React.Fragment>
    )
}

function RenderDetail({detail}){
    //Shows the Unit Detail
    return(
            <div className="row justify-content-md-center">
                        <Media src={detail} style={imageSize} />
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
                    <center>
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
                    </center>
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

function RenderTwoStar({lore, unitImage}) {
    return (
        <React.Fragment>
            <p>{lore}</p>
            <center>
                <Media src={unitImage.detail2} style={imageSize} />
            </center>
        </React.Fragment>
    )
}

function RenderThreeStar({lore, unitImage}) {
    return (
        <React.Fragment>
            <p>{lore}</p>
            <center>
                <Media src={unitImage.detail3} style={imageSize} />
            </center>
        </React.Fragment>
    )
}

function RenderFourStar({lore, unitImage}) {
    return (
        <React.Fragment>
            <p>{lore}</p>
            <center>
                <Media src={unitImage.detail4} style={imageSize} />
            </center>
        </React.Fragment>
    )
}

function RenderFiveStar({lore, unitImage}) {
    return(
        <React.Fragment>
            <p>{lore}</p>
            <center>
                <Media src={unitImage.detail5} style={imageSize} />
            </center>
        </React.Fragment>
    )
}

function RenderAwaken({lore, unitImage}) {
    return (
        <React.Fragment>
            <p>{lore}</p>
            <center>
                <Media src={unitImage.detail} style={imageSize} />
            </center>
        </React.Fragment>
    )
}

function RenderStats({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive}){
    //Tab for Stats
    //Possibly make if else statements to check if ability3 exists
    if(unitPassive.ability3){
        return (
            <Container>
                <Row>
                        <center><h1><strong>{unitName}</strong></h1></center>
                </Row>
                <Row>
                    <Col>
                        <p><i>{unitAtt} , {unitType}</i></p>
                        <p>HP - {unitStats.hp} <Badge color="info" pill>+{unitStats.hpplus}</Badge></p>
                        <p>ATK - {unitStats.atk} <Badge color="info" pill>+{unitStats.atkplus}</Badge></p>
                        <p>DEF - {unitStats.def} <Badge color="info" pill>+{unitStats.defplus}</Badge></p>
                    </Col>
                    <Col>
                        <strong>SKILL</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <strong>ARTS</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <strong>TRUE ARTS</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <strong>PASSIVES</strong>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                            <li>{unitPassive.ability3}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }

    if(unitPassive.ability2){
        return (
            <Container>
                <Row>
                        <center><h1><strong>{unitName}</strong></h1></center>
                </Row>
                <Row>
                    <Col>
                        <p><i>{unitAtt} , {unitType}</i></p>
                        <p>HP - {unitStats.hp} <Badge color="info" pill>+{unitStats.hpplus}</Badge></p>
                        <p>ATK - {unitStats.atk} <Badge color="info" pill>+{unitStats.atkplus}</Badge></p>
                        <p>DEF - {unitStats.def} <Badge color="info" pill>+{unitStats.defplus}</Badge></p>
                    </Col>
                    <Col>
                        <strong>SKILL</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <strong>ARTS</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <strong>TRUE ARTS</strong>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <strong>PASSIVES</strong>
                        <ul>
                            <li>{unitPassive.ability1}</li>
                            <li>{unitPassive.ability2}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
    return <div />
}

function RenderTrue({unitTrue, truePassive, trueImage}) {
    //Tab for True Weapon
    //POSSIBLY might need to add if statements to check to Passives based on amount
    if(unitTrue){
        return (
            <Container>
                <Row>
                    <center><Media src={trueImage} style={imageSize} /></center>
                    <center><strong><h1>{unitTrue.name}</h1></strong></center>
                    <Col>
                        <strong>SKILL</strong>
                        <p><Badge color="secondary">BREAK {unitTrue.skillbreak}</Badge> {unitTrue.skill} </p>
                    </Col>
                    <Col>
                        <p><strong>PASSIVE</strong>
                            <ul>
                                <li>{truePassive.ability1}</li>
                                <li>{truePassive.ability2}</li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <center><h1>This unit does not have a True Weapon</h1></center>
            </Container>
        )
    }
}



export default UnitDetails;
