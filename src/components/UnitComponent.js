import React from 'react';
import { Media, Container, Nav, NavItem, Card, CardHeader, CardBody
} from 'reactstrap';
import '../index.css';
import '../App.css';
import { useParams, Link, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';
import { RenderTrue } from './unitinfo/TrueComponent';
import { RenderStats } from './unitinfo/StatsComponent';
import { RenderTwoStar, RenderThreeStar, RenderFourStar, RenderFiveStar, RenderAwaken } from './unitinfo/LoreComponent';

function UnitDetails () {
    const selectedUnit = useParams();
    const units = getUnitByName(selectedUnit.unitName);
    
    return (
        <React.Fragment>
            
            

            <Container>
                <Routes>
                    <Route path="/" element={<UnitHome />} >
                        <Route path="lore" element={<React.Fragment>  
                        <RenderLore unitLore={units.lore} unitImage={units.image} unitName={units.name} />
                        </React.Fragment>}>
                            <Route index />
                            <Route path="twostar" element={<RenderTwoStar lore={units.lore.evo2} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="threestar" element={<RenderThreeStar lore={units.lore.evo3} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="fourstar" element={<RenderFourStar lore={units.lore.evo4} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="fivestar" element={<RenderFiveStar lore={units.lore.evo5} unitImage={units.image} unitEvo={units.evolution} />} />
                            <Route path="awaken" element={<RenderAwaken lore={units.lore.evoawk} unitImage={units.image} unitEvo={units.evolution} />} />
                            </Route>
                    <Route path="stats" element={<React.Fragment>
                                                    <RenderStats unitName={units.name} unitStats={units.stats} 
                                                    unitAtt={units.attribute} unitType={units.type} unitSkill={units.skillset} 
                                                    unitPassive={units.passive} unitSlots={units.slots} unitImage={units.image}/>
                                                    </React.Fragment>} />
                    <Route path="trueweapon" element={<RenderTrue unitTrue={units} />} />
                    </Route>
                </Routes>
            </Container>
        </React.Fragment>
    )
}

function UnitHome() {
    return (
        <center>
            <Card style={{backgroundColor: "#25274d", paddingBottom: "2rem"}}>
                <CardHeader style={{backgroundColor: "#29648a"}}>
                    <h2>Select a category to view Unit Information</h2>
                </CardHeader>
                <CardBody>
                    <Nav card="true" justified style={{backgroundColor: "#2e9cca", height: "4rem", marginTop: "1rem"}}>
                    <NavItem>
                        <NavLink to="lore" style={({ isActive }) => ({
                                                fontSize: "2rem",
                                                color: isActive ? '#25274d' : '#aaabb8',
                                                textDecoration: isActive ? '' : 'none'})}>
                            Lore
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="stats" style={({ isActive }) => ({
                                                    fontSize: "2rem",
                                                    color: isActive ? '#25274d' : '#aaabb8',
                                                    textDecoration: isActive ? '' : 'none'})}>
                            Stats
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="trueweapon" style={({ isActive }) => ({
                                                        fontSize: "2rem",
                                                        color: isActive ? '#25274d' : '#aaabb8',
                                                        textDecoration: isActive ? '' : 'none'})}>
                            True Weapon
                        </NavLink>
                    </NavItem>
                    </Nav>
                </CardBody>
                <Outlet />
            </Card>
        </center>
    )
}

function RenderLore({unitName, unitLore, unitImage}) {
    //Use If statements to check if unitlore.evo# exists? , then display information? https://ui.dev/react-router-nested-routes/
    //Redo Links as NAvbars?
    //Check down list and return based on the earliest available evolution
    
    //Check if Awk Exists
    if(unitLore.evoawk){
        if(unitLore.evo2) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                                <Link to="twostar" activeClassName="active">
                                    <Media src={unitImage.thumb2} />
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="threestar" activeClassName="active">
                                    <Media src={unitImage.thumb3} />
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="fourstar" activeClassName="active">
                                    <Media src={unitImage.thumb4} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="awaken" activeClassName="active">
                                    <Media src={unitImage.thumbawk} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }
    
        if(unitLore.evo3) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                                <Link to="threestar" activeClassName="active">
                                    <Media src={unitImage.thumb3} />
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="fourstar" activeClassName="active">
                                    <Media src={unitImage.thumb4} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="awaken" activeClassName="active">
                                    <Media src={unitImage.thumbawk} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }
    
        if(unitLore.evo4) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                                <Link to="fourstar" activeClassName="active">
                                    <Media src={unitImage.thumb4} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="awaken" activeClassName="active">
                                    <Media src={unitImage.thumbawk} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }
    
        if(unitLore.evo5) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="awaken" activeClassName="active">
                                    <Media src={unitImage.thumbawk} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }
    }
    
    if(unitLore.evo5){
        if(unitLore.evo4) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                                <Link to="fourstar" activeClassName="active">
                                    <Media src={unitImage.thumb4} />
                                </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }

        if(unitLore.evo5) {
            return (
                <React.Fragment>
                    <center><h1><strong>{unitName}</strong></h1></center>
                    <p><center>Select an Evolution to view the Lore</center></p>
                    <center>
                        <Nav justified>
                            <NavItem>
                            <Link to="fivestar" activeClassName="active">
                                    <Media src={unitImage.thumb5} />
                                </Link>
                            </NavItem>
                        </Nav>
                    </center>
                    <Outlet />
                </React.Fragment>
            )
        }
    }
}

export default UnitDetails;
