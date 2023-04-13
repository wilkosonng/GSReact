import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, Media, Table, CardHeader } from 'reactstrap'; 

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75,
    width: "100%",
    padding: 0
};

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

const unitCard = {
    backgroundColor: "#292930", 
    color: "#e7f9fc",
    marginTop: "2rem",
    width: "100%"
}

const evoCard = {
    backgroundColor: "#202022",
    color: "#e7f9fc",
    width: "100%"
}

export function RenderTwoStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card style={unitCard}>
                <CardTitle>
                    <center>
                        <Card style={evoCard}>
                            <CardHeader>
                                <h2>Evolution Materials</h2>
                            </CardHeader>
                            <CardBody>
                                <RenderEvolution mat={unitEvo.evo23} />
                            </CardBody>
                        </Card>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        <RenderLore lore={lore} />
                    </CardText>
                </CardBody>
                <RenderDetail detail={unitImage.detail2} />
            </Card>
        </React.Fragment>
    )
}

export function RenderThreeStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card style={unitCard}>
                <CardTitle>
                    <center>
                        <Card style={evoCard}>
                            <CardHeader>
                                <h2>Evolution Materials</h2>
                            </CardHeader>
                            <CardBody>
                                <RenderEvolution mat={unitEvo.evo34} />
                            </CardBody>
                        </Card>
                    </center>
                </CardTitle>
                <CardBody>
                    <CardText>
                        <RenderLore lore={lore} />
                    </CardText>
                </CardBody>
                <RenderDetail detail={unitImage.detail3} />
            </Card>
        </React.Fragment>
    )
}

export function RenderFourStar({lore, unitImage, unitEvo}) {
    return (
        <React.Fragment>
            <Card style={unitCard}>
                <CardTitle>
                    <center>
                        <Card style={evoCard}>
                            <CardHeader>
                                <h2>Evolution Materials</h2>
                            </CardHeader>
                            <CardBody>
                                <RenderEvolution mat={unitEvo.evo45} />
                            </CardBody>
                        </Card>
                    </center>
                </CardTitle>
                <CardBody>
                    <CardText>
                        <RenderLore lore={lore} />
                    </CardText>
                </CardBody>
                <RenderDetail detail={unitImage.detail4} />    
            </Card>
        </React.Fragment>
    )
}

export function RenderFiveStar({lore, unitImage, unitEvo = false}) {
    if(unitEvo.evo5awk){
        return (
            <React.Fragment>
                <Card style={unitCard}>
                    <CardTitle>
                        <center>
                            <Card style={evoCard}>
                                <CardHeader>
                                    <h2>Evolution Materials</h2>
                                </CardHeader>
                                <CardBody>
                                    <RenderEvolution mat={unitEvo.evo5awk} />
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <RenderLore lore={lore} />
                        </CardText>
                    </CardBody>
                    <RenderDetail detail={unitImage.detail5} />   
                </Card>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Card style={unitCard}>
                <CardTitle>
                    <h3 style={{ marginTop: "2rem" }}><center>This unit has reached max evolution</center></h3>
                </CardTitle>
                <CardBody>
                    <RenderLore lore={lore} />
                </CardBody>
                <RenderDetail detail={unitImage.detail5} />
            </Card>
        </React.Fragment>
    )
}

export function RenderAwaken({lore, unitImage, unitEvo}) {
    if(unitImage.detailsuper) {
        return (
            <React.Fragment>
                <Card style={unitCard}>
                    <CardTitle>
                        <center>
                            <Card style={evoCard}>
                                <CardHeader>
                                    <h2>Evolution Materials</h2>
                                </CardHeader>
                                <CardBody>
                                    <RenderEvolution mat={unitEvo.evoawksuper} />
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <RenderLore lore={lore} />
                        </CardText>
                    </CardBody>
                    <RenderDetail detail={unitImage.detailawk} />   
                </Card>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Card style={unitCard}>
                    <CardTitle>
                        <h3><center>This unit has reached max evolution</center></h3>
                    </CardTitle>
                    <CardBody>
                        <center>{lore}</center>
                    </CardBody>
                    <RenderDetail detail={unitImage.detailawk} />
                </Card>
            </React.Fragment>
        )
    }
    
}

export function RenderSuper({lore, unitImage}) {
    return (
        <React.Fragment>
            <Card style={unitCard}>
                <CardTitle>
                    <h3 style={{marginTop: "2rem"}}><center>This unit has reached max evolution</center></h3>
                </CardTitle>
                <CardBody>
                    <RenderLore lore={lore} />
                </CardBody>
                <RenderDetail detail={unitImage.detailsuper} />
            </Card>
        </React.Fragment>
    )
}

const RenderEvolution = ({ mat }) => {

    //TODO TODO TODO: Make own tooltips as these ones are showing up for prior evolutions incorrectly

    //State for individual Tooltips
    const [tooltip1, setTooltip1] = useState(false);
    const [tooltip2, setTooltip2] = useState(false);
    const [tooltip3, setTooltip3] = useState(false);
    const [tooltip4, setTooltip4] = useState(false);
    const [tooltip5, setTooltip5] = useState(false);

    return (
        <h3>
            <Table>
                <tr>
                    <th><center><Media src={mat.mat1} style={thumbnailSize} id="hover1"/></center></th>
                    {
                        //Material Checks
                    }
                    { mat.mat2 ? <th onMouseOver={() => setTooltip1(true)}><center><Media src={mat.mat2} style={thumbnailSize} id="hover2"/></center></th> : null }
                    { mat.mat3 ? <th><center><Media src={mat.mat3} style={thumbnailSize} id="hover3"/></center></th> : null }
                    { mat.mat4 ? <th><center><Media src={mat.mat4} style={thumbnailSize} id="hover4"/></center></th> : null }
                    { mat.mat5 ? <th><center><Media src={mat.mat5} style={thumbnailSize} id="hover5"/></center></th> : null }
                    
                </tr>
                <tr >
                    <td style={{ padding: "0px"}}> <center>X{mat.mat1amt}</center></td>
                    { mat.mat2 ? <td style={{ padding: "0px"}}><center>X{mat.mat2amt}</center></td> : null }
                    { mat.mat3 ? <td style={{ padding: "0px"}}><center>X{mat.mat3amt}</center></td> : null }
                    { mat.mat4 ? <td style={{ padding: "0px"}}><center>X{mat.mat4amt}</center></td> : null }
                    { mat.mat5 ? <td style={{ padding: "0px"}}><center>X{mat.mat5amt}</center></td> : null }
                </tr>
            </Table>
        </h3>
    )
}

const RenderLore = ({ lore }) => {
    return (
        <center><p>{lore}</p></center>
    )
}

const RenderDetail = ({ detail }) => {
    return (
        <center><CardImg src={detail} style={imageSize} /></center>
    )
}