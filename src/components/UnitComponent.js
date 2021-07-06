import React, { Component } from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Button, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, Badge, TabContent, TabPane} from 'reactstrap';
import { UnitInformation } from '../shared/unitInfo';
import '../index.css';

class Units extends Component { 
    constructor (props) {
        super(props);

        this.state = {
            units: UnitInformation,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                {this.props.units.map(unit => {
                    return (
                                <React.Fragment>
                                    <div className="container">
                                        <div className="row">
                                            <a onClick={this.toggleModal}>
                                                <RenderThumbnails units={unit}  />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-xl" centered autoFocus>
                                        <ModalHeader toggle={this.toggleModal} >{unit.name}</ModalHeader>
                                        <ModalBody>
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
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                                <Media src={unit.image.detail} alt={unit.name} className="unitDetail" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <p><i>{unit.attribute} , {unit.type}</i></p>
                                                                <p>HP - {unit.stats.hp} <Badge color="info">{unit.stats.hpplus}</Badge></p>
                                                                <p>ATK - {unit.stats.atk} <Badge color="info">{unit.stats.atkplus}</Badge></p>
                                                                <p>DEF - {unit.stats.def} <Badge color="info">{unit.stats.defplus}</Badge></p>
                                                            </div>
                                                            <div className="col">
                                                                <strong>SKILL</strong>
                                                                <p><Badge color="secondary">BREAK {unit.skillset.skillbreak}</Badge> {unit.skillset.skill}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane id="trueweapon">

                                                </TabPane>
                                                <TabPane id="lore">

                                                </TabPane>
                                            </TabContent>
                                        </ModalBody>
                                    </Modal>
                                </React.Fragment>
                            );
                        })}
            </React.Fragment>
        );
    }
}

function RenderThumbnails ({units}) {
    if(units) {
        return (
            <Media src={units.image.thumbawk} alt={units.name} width="75" height="75" />
        );
    }
}


export default Units;