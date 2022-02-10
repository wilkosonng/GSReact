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

    /*TODO: 
        Create folder to separate the functions in other files to clean up
    */
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
                            <Route path="twostar" element={<RenderTwoStar lore={units.lore.evo2} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="threestar" element={<RenderThreeStar lore={units.lore.evo3} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="fourstar" element={<RenderFourStar lore={units.lore.evo4} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="fivestar" element={<RenderFiveStar lore={units.lore.evo5} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="awaken" element={<RenderAwaken lore={units.lore.evoawk} unitImage={units.image} unitEvo={units.evolution} />} />
                    </Route>
                    <Route path="stats" element={<React.Fragment>
                                                    <RenderDetail detail={units.image.detailawk} />
                                                    <RenderStats unitName={units.name} unitStats={units.stats} 
                                                    unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} 
                                                    unitPassive={units.passive} unitSlots={units.slots} />
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

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75
};

function RenderTwoStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card>
                <CardTitle>
                    <center>
                        <table>
                            <tr>
                                <th colspan="2"><center>Current</center></th>
                                <th colspan="5"><center>Evolution Materials</center></th>
                                <th colspan="2"><center>Next Evolution</center></th>
                            </tr>
                            <tr>
                                <td colspan="2"><center><Media src={unitImage.thumb2} style={thumbnailSize}/></center></td>
                                <td colspan="5">
                                    <Card>
                                        <CardBody>
                                        <h3>
                                            <table>
                                                <tr>
                                                    <th><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></th>
                                                </tr>
                                                <tr>
                                                    <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                                    <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                                </tr>
                                            </table>
                                        </h3>
                                        </CardBody>
                                    </Card>
                                    
                                </td>
                                <td colspan="2"><center><Media src={unitImage.thumb3} style={thumbnailSize} /></center></td>
                            </tr>
                        </table>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        {lore}
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail2} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

function RenderThreeStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card>
                <CardTitle>
                    <center>
                        <table>
                            <tr>
                                <th colspan="2"><center>Current</center></th>
                                <th colspan="5"><center>Evolution Materials</center></th>
                                <th colspan="2"><center>Next Evolution</center></th>
                            </tr>
                            <tr>
                                <td colspan="2"><center><Media src={unitImage.thumb3} style={thumbnailSize}/></center></td>
                                <td colspan="5">
                                    <Card>
                                        <CardBody>
                                        <h3>
                                            <table>
                                                <tr>
                                                    <th><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></th>
                                                </tr>
                                                <tr>
                                                    <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                                    <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                                </tr>
                                            </table>
                                        </h3>
                                        </CardBody>
                                    </Card>
                                    
                                </td>
                                <td colspan="2"><center><Media src={unitImage.thumb4} style={thumbnailSize} /></center></td>
                            </tr>
                        </table>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        {lore}
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail3} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

function RenderFourStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card>
                <CardTitle>
                    <center>
                        <table>
                            <tr>
                                <th colspan="2"><center>Current</center></th>
                                <th colspan="5"><center>Evolution Materials</center></th>
                                <th colspan="2"><center>Next Evolution</center></th>
                            </tr>
                            <tr>
                                <td colspan="2"><center><Media src={unitImage.thumb4} style={thumbnailSize}/></center></td>
                                <td colspan="5">
                                    <Card>
                                        <CardBody>
                                        <h3>
                                            <table>
                                                <tr>
                                                    <th><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></th>
                                                </tr>
                                                <tr>
                                                    <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                                    <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                                </tr>
                                            </table>
                                        </h3>
                                        </CardBody>
                                    </Card>
                                    
                                </td>
                                <td colspan="2"><center><Media src={unitImage.thumb5} style={thumbnailSize} /></center></td>
                            </tr>
                        </table>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        {lore}
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail4} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

function RenderFiveStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card>
                <CardTitle>
                    <center>
                        <table>
                            <tr>
                                <th colspan="2"><center>Current</center></th>
                                <th colspan="5"><center>Evolution Materials</center></th>
                                <th colspan="2"><center>Next Evolution</center></th>
                            </tr>
                            <tr>
                                <td colspan="2"><center><Media src={unitImage.thumb5} style={thumbnailSize}/></center></td>
                                <td colspan="5">
                                    <Card>
                                        <CardBody>
                                        <h3>
                                            <table>
                                                <tr>
                                                    <th><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize}/></th>
                                                </tr>
                                                <tr>
                                                    <td><center>X{unitEvo.evo5awk.mat1amt}</center></td>
                                                    <td><center>X{unitEvo.evo5awk.mat2amt}</center></td>
                                                    <td><center>X{unitEvo.evo5awk.mat3amt}</center></td>
                                                </tr>
                                            </table>
                                        </h3>
                                        </CardBody>
                                    </Card>
                                    
                                </td>
                                <td colspan="2"><center><Media src={unitImage.thumbawk} style={thumbnailSize} /></center></td>
                            </tr>
                        </table>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        {lore}
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail5} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

function RenderAwaken({lore, unitImage}) {
    return (
        <React.Fragment>
            <Card>
                <CardTitle>
                    <h3><center>This unit has reached max evolution</center></h3>
                </CardTitle>
                <CardBody>
                    {lore}
                </CardBody>
                <center><CardImg src={unitImage.detailawk} style={imageSize} /></center>
            </Card>
        </React.Fragment>
    )
}

const lbIconSize = {
    maxHeight: 40,
    maxWidth: 40
}

function RenderStats({unitName, unitStats, unitAtt, unitType, unitSkill, unitPassive, unitSlots}){
    //Tab for Stats
    //Possibly make if else statements to check if ability3 exists
    //TODO: Work on Viewports
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
                        <h3><strong>SLOTS</strong></h3>
                        <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                    </Col>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
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
                        <h3><strong>SLOTS</strong></h3>
                        <h4>{unitSlots.slot1}☆ <Media src={unitSlots.slot1type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot2}☆ <Media src={unitSlots.slot2type} style={lbIconSize} /></h4>
                        <h4>{unitSlots.slot3}☆ <Media src={unitSlots.slot3type} style={lbIconSize} /></h4>
                    </Col>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.skillbreak}</Badge> {unitSkill.skill}</p>
                        <h3><strong>ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.artsbreak}</Badge> {unitSkill.arts}</p>
                        <h3><strong>TRUE ARTS</strong></h3>
                        <p><Badge color="primary" pill>BREAK {unitSkill.trueartsbreak}</Badge> {unitSkill.truearts}</p>
                    </Col>
                    <Col>
                        <h3><strong>PASSIVES</strong></h3>
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
                    <center><strong><h1><Media src={unitTrue.slot} />{unitTrue.name}<Media src={unitTrue.slot} /></h1></strong></center>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="secondary">BREAK {unitTrue.skillbreak}</Badge> {unitTrue.skill} </p>
                    </Col>
                    <Col>
                        <p><h3><strong>PASSIVE</strong></h3>
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
