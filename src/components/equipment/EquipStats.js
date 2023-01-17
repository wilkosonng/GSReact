import { Container, Badge, Row, Table, List } from 'reactstrap';

const EquipStats = ({ skillset, stats, passive, star }) => {
    return (
        <Container style={{marginTop: "1rem"}}>
            <center>
                <RenderStats hp={stats.hp} atk={stats.atk} def={stats.def} star={star} />
                <RenderSkill skillbreak={skillset.break} skilleffect={skillset.skill} />
                <RenderPassives passive={passive} />
            </center>
        </Container>
    )
}

const RenderStats = ({ hp, atk, def, star }) => {
    return (
        <Row style={{ marginTop: "1rem" , marginBottom: "1rem"}}>
            <i>Stats and Skillset shown are based on Max Level and Max Limit Break</i>
            <center>
            <Table bordered style={{ width: "15rem", marginTop: "1rem"}}>
                <tr>
                    <th>
                        <center>HP</center>
                    </th>
                    <th>
                        <center>ATK</center>
                    </th>
                    <th>
                        <center>DEF</center>
                    </th>
                    <th>
                        <center>Rarity</center>
                    </th>
                </tr>
                <tr>
                    <td><center>{hp}</center></td>
                    <td><center>{atk}</center></td>
                    <td><center>{def}</center></td>
                    <td><center><RenderRarity rarity={star} /></center></td>
                </tr>
            </Table></center>
        </Row>
    )
}

const RenderRarity = ({ rarity }) => {
    switch(rarity) {
        case 1: 
            return (
                <>
                    ☆
                </>
            )
        case 2:
            return (
                <>☆☆</>
            )
        case 3: 
            return (
                <>☆☆☆</>
            )
        case 4:
            return (
                <>☆☆☆☆</>
            )
        case 5:
            return (
                <>☆☆☆☆☆</>
            )
        case 6:
            return (
                <>☆☆☆☆☆☆</>
            )
        default:
            return null;
    }
}

const RenderSkill = ({ skillbreak, skilleffect }) => {
    return (
        <Row style={{ marginBottom: "1rem"}}>
            <h4><strong>SKILL</strong></h4>
            <p><Badge color="primary" pill>BREAK {skillbreak}</Badge> {skilleffect}</p>
        </Row>
    )
}

const RenderPassives = ({ passive }) => {
    //NOTE to Dev: Some Equips have a LIST of random passives. Use accordion?
    return (
        <Row>
            <h4><strong>PASSIVES</strong></h4>
            <List type="unstyled">
                { passive.ability1 ? <li>{passive.ability1}</li> : <li>This Equip has no passive</li> }
                { passive.ability2 ? <li>{passive.ability2}</li> : null}
                { passive.ability3 ? <li>{passive.ability3}</li> : null}
                { passive.ability4 ? <li>{passive.ability4}</li> : null}
            </List>
        </Row>
    )
}

export default EquipStats;