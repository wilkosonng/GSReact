import { useState } from 'react';
import { Container, Row, Col, Media, Card, CardHeader, CardBody, Accordion, AccordionItem, AccordionBody, AccordionHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getEquips } from '../../shared/equipInfo';
import Placeholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const Equips = () => {
    //Obtain Equipment Data
    const equips = getEquips();

    //Search Query
    const [query, setQuery] = useState("");

    //Filter Default Settings
    const [filters, setFilters] = useState({
        type: {
            phys: true,
            mag: true,
            def: true,
            heal: true,
            supp: true
        },
        rarity: {
            one: true,
            two: true,
            three: true,
            four: true,
            five: true,
            six: true
        },
        server: {
            Global: true,
            Unreleased: true
        }
    })

    //Accordion
    const [accordion, setAccordion] = useState("0")
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id)
    }
    

    //Function to Set Button Filters
    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFilters({
            ...filters,
            [name]: {
            ...filters[name],
            [value]: checked,
            },
        });

    };

    //Display Equipment Thumbnails
    return (
        <>
            <Container style={{marginTop: "5rem"}}>
                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <Card style={{backgroundColor: "#292930", color: "#e7f9fc", marginBottom: "2rem", padding: "0" }}>
                        <CardHeader style={{backgroundColor: "#22bbff", color: "#292930", padding: "0" }}>
                            <center><h3>Select an Equipment to view the Equipment's information</h3></center>
                        </CardHeader>
                        <CardBody>
                            <p><center>Please be aware that ALL equips are available, including equips only currently available in Japan.</center></p>
                        </CardBody>
                    </Card>
                </Row>

                <Row style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2rem" }}>
                    <Accordion open={accordion} toggle={toggle}>
                        <AccordionItem style={{ borderColor: "#292930"}}>
                            <AccordionHeader targetId="1">
                                <h5 style={{ color: "#e7f9fc" , padding: "0", marginTop: "0px", marginBottom: "0px" }}>
                                    <center>Advanced Filters</center>
                                </h5>
                            </AccordionHeader>
                            <AccordionBody accordionId="1" style={{ backgroundColor: "#202022", color: "#e7f9fc", padding: "0"}}>
                                <Row>
                                    <Col xs="6" sm="4">
                                        <ServerFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col xs="6" sm="4">
                                        <TypeFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                    <Col>
                                        <RarityFilters filters={filters} handleChange={handleChange} />
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Row>

                <Row style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <center>
                        <input placeholder='Search Equipment Name'
                                onChange={e => setQuery(e.target.value)}
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    maxWidth: "790px",
                                    height: "auto",
                                    marginBottom: "2rem",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }} />
                    </center>
                </Row>
                <Row>
                    {
                        equips.filter(equip => {
                            const isGlobalChecked = filters.server.Global
                            const isUnreleasedChecked = filters.server.Unreleased

                            //Check for Server
                            const hasMatchingServer = (isGlobalChecked && isUnreleasedChecked)
                            || ((isGlobalChecked && !isUnreleasedChecked) && !equip.lore.toLowerCase().includes('currently unreleased in global'))
                            || ((!isGlobalChecked && isUnreleasedChecked) && equip.lore.toLowerCase().includes('currently unreleased in global'))
                            
                            //Check for Types
                            const selectedTypes = Object.keys(filters.type).filter((key) => filters.type[key])
                            const hasMatchingTypes = selectedTypes.some((type) => equip.type.includes(`/db/Mines/thumbnail/${type}LB.png`))
                            
                            //Check for Rarity
                            const selectedRarities = Object.keys(filters.rarity).filter((key) => filters.rarity[key])
                            const hasMatchingRarities = selectedRarities.some((rarity) => {
                                if (rarity === "one" && equip.star === 1) {
                                    return true
                                }
                                if (rarity === "two" && equip.star === 2) {
                                    return true
                                }
                                if (rarity === "three" && equip.star === 3) {
                                    return true
                                }
                                if (rarity === "four" && equip.star === 4) {
                                    return true
                                }
                                if (rarity === "five" && equip.star === 5) {
                                    return true
                                }
                                if (rarity === "six" && equip.star === 6) {
                                    return true
                                }

                                return false
                            })

                            //Check for Search
                            const hasMatchingName = equip.name.toLowerCase().includes(query.toLowerCase())

                            return hasMatchingServer && hasMatchingTypes && hasMatchingName && hasMatchingRarities
                        })
                        .map(equip => {
                            return (
                                <>
                                    { equip.name !== "???" &&
                                        <Col key={equip.id} xs="4" sm="auto">
                                            <center>
                                                <Card style={{maxWidth: "80px", backgroundColor: "#202022", border: "none"}}>
                                                    <Link to={`/equips/${equip.name}`} style={{textDecoration: "none", color: "#aaabb8"}} >
                                                        <Placeholder type="rect" rows={1} ready={ equip.image.thumbmax !== "" } >
                                                            <Media src={equip.image.thumbmax} alt={equip.name} width="100%" height="auto" object-fit="cover" />
                                                        </Placeholder>
                                                        <Placeholder rows={1} ready={equips.image?.thumbmax !== ""} >
                                                            <center><p style={{display: "inline-block", marginLeft: "-8px", marginRight: "-2px"}}>{equip.name}</p></center>
                                                        </Placeholder>
                                                    </Link>
                                                </Card>
                                            </center>
                                        </Col>
                                    }
                                    
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const ServerFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Server</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.server.Global ? "green" : ""}}>
                    <input
                        type="checkbox"
                        name="server"
                        value="Global"
                        checked={filters.server.Global}
                        onChange={handleChange}
                        />
                        Global
                </label>
                <label style={{ backgroundColor: filters.server.Unreleased ? "green" : ""}}>
                    <input
                        type="checkbox"
                        name="server"
                        value="Unreleased"
                        checked={filters.server.Unreleased}
                        onChange={handleChange}
                        />
                        Unreleased
                </label>
            </form>
        </center>
    )
}

const TypeFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Type</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.type.phys ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="phys"
                        checked={filters.type.phys}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/physLB.png" alt="Physical Equipment" className="filterIcons" />
                    Physical
                </label>
                <label style={{ backgroundColor: filters.type.mag ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="mag"
                        checked={filters.type.mag}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/magLB.png" alt="Magical Equipment" className="filterIcons" />
                    Magical
                </label>
                <label style={{ backgroundColor: filters.type.def ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="def"
                        checked={filters.type.def}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/defLB.png" alt="Defense Equipment" className="filterIcons" />
                    Defense
                </label>
                <label style={{ backgroundColor: filters.type.heal ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="heal"
                        checked={filters.type.heal}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/healLB.png" alt="Healing Equipment" className="filterIcons" />
                    Healing
                </label>
                <label style={{ backgroundColor: filters.type.supp ? "#2774AF" : ""}} >
                    <input
                        type="checkbox"
                        name="type"
                        value="supp"
                        checked={filters.type.supp}
                        onChange={handleChange}
                        />
                    <img src="/db/Mines/thumbnail/suppLB.png" alt="Support Equipment" className="filterIcons" />
                    Support
                </label>
            </form>
        </center>
    )
}

const RarityFilters = ({ filters, handleChange }) => {
    return (
        <center>
            <b>Rarity</b>
            <form className="filterButtons">
                <label style={{ backgroundColor: filters.rarity.one ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="one"
                        checked={filters.rarity.one}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip1_star.png" alt="One Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.two ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="two"
                        checked={filters.rarity.two}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip2_star.png" alt="Two Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.three ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="three"
                        checked={filters.rarity.three}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip3_star.png" alt="Three Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.four ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="four"
                        checked={filters.rarity.four}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip4_star.png" alt="Four Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.five ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="five"
                        checked={filters.rarity.five}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip5_star.png" alt="Five Star Rarity" />
                </label>
                <label style={{ backgroundColor: filters.rarity.six ? "blue" : "" }} className="rarityLabel">
                    <input
                        type="checkbox"
                        name="rarity"
                        value="six"
                        checked={filters.rarity.six}
                        onChange={handleChange} 
                        />
                    <img src="/db/Icons/other/equip6_star.png" alt="Six Star Rarity" />
                </label>
            </form>
        </center>
    )
}
export default Equips;