import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import '../index.css';
import { useParams, Link, Routes, Route, Outlet } from 'react-router-dom';
import { getUnitByName } from '../shared/unitInfo';
import { RenderTrue } from './unitinfo/TrueComponent';
import { RenderStats } from './unitinfo/StatsComponent';
import { RenderTwoStar, RenderThreeStar, RenderFourStar, RenderFiveStar, RenderAwaken } from './unitinfo/LoreComponent';

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
                    <Route path="trueweapon" element={<RenderTrue unitTrue={units} />} />
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
                    <center>
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

    if(unitLore.evo4) {
        return (
            <React.Fragment>
                <nav>
                    <center>
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

    if(unitLore.evo5) {
        return (
            <React.Fragment>
                <nav>
                    <center>
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

}

export default UnitDetails;
