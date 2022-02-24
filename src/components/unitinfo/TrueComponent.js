import { Container, Row, Col, Badge, Media } from 'reactstrap';

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

export function RenderTrue({unitTrue}) {
    //Tab for True Weapon
    //Add if statements to check to Passives based on amount (1 Passive)
    //Add if statements to check multiple true weapons and create tabs based on number https://www.geeksforgeeks.org/reactjs-reactstrap-tab-component/
    if(unitTrue.trueweapon){
        return (
            <Container>
                <Row>
                    <center><Media src={unitTrue.trueweapon.detail} style={imageSize} /></center>
                    <center><strong><h1><Media src={unitTrue.trueweapon.slot} />{unitTrue.trueweapon.name}<Media src={unitTrue.slot} /></h1></strong></center>
                    <Col>
                        <h3><strong>SKILL</strong></h3>
                        <p><Badge color="secondary">BREAK {unitTrue.trueweapon.skillbreak}</Badge> {unitTrue.trueweapon.skill} </p>
                    </Col>
                    <Col>
                        <p><h3><strong>PASSIVE</strong></h3>
                            <ul>
                                <li>{unitTrue.trueweapon.passive.ability1}</li>
                                <li>{unitTrue.trueweapon.passive.ability2}</li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    } 
    return (
            <Container>
                <center><h1>This unit does not have a True Weapon</h1></center>
            </Container>
        )
    
}