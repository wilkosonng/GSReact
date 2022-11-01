import React, { useState } from 'react';
import { Tooltip, Card, CardTitle, CardBody, CardText, CardImg, Media, Table, CardHeader } from 'reactstrap'; 

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75,
    width: "100%"
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
    if(unitEvo.evo23.mat5){
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat4} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat5} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat4amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat5amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail2} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo23.mat4) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat4} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat4amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail2} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo23.mat3) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo23.mat3amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail2} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

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
                            <h3>
                                <Table>
                                    <tr>
                                        <th><center><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></center></th>
                                        <th><center><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></center></th>
                                    </tr>
                                    <tr>
                                        <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                        <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                    </tr>
                                </Table>
                            </h3>
                            </CardBody>
                        </Card>
                    </center>
                    
                </CardTitle>
                <CardBody>
                    <CardText>
                        <center>{lore}</center>
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail2} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

export function RenderThreeStar({lore, unitImage, unitEvo}) {
    if(unitEvo.evo34.mat5) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat4} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat5} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat4amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat5amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                        
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail3} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo34.ma4) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat4} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat4amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail3} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo34.mat3) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo34.mat3amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                        
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail3} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

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
                            <h3>
                                <Table>
                                    <tr>
                                        <th><center><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></center></th>
                                        <th><center><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></center></th>
                                    </tr>
                                    <tr>
                                        <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                        <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                    </tr>
                                </Table>
                            </h3>
                            </CardBody>
                        </Card>
                    </center>
                </CardTitle>
                <CardBody>
                    <CardText>
                        <center>{lore}</center>
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail3} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

export function RenderFourStar({lore, unitImage, unitEvo}) {
    if(unitEvo.evo45.mat5) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat4} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat5} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat4amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat5amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail4} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo45.mat4) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat4} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat4amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail4} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo45.mat3) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></center></th>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo45.mat3amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail4} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

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
                            <h3>
                                <Table>
                                    <tr>
                                        <th><center><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></center></th>
                                        <th><center><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></center></th>
                                    </tr>
                                    <tr>
                                        <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                        <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                    </tr>
                                </Table>
                            </h3>
                            </CardBody>
                        </Card>
                    </center>
                </CardTitle>
                <CardBody>
                    <CardText>
                        <center>{lore}</center>
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail4} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

export function RenderFiveStar({lore, unitImage, unitEvo}) {
    //Tooltip for Boss Names
    const [tooltip3, setTooltip3] = useState(false);
    const [tooltip4, setTooltip4] = useState(false);
    const [tooltip5, setTooltip5] = useState(false);

    if(!unitEvo){
        return (
            <React.Fragment>
                <Card style={unitCard}>
                    <CardTitle>
                        <h3><center>This unit has reached max evolution</center></h3>
                    </CardTitle>
                    <CardBody>
                        <center>{lore}</center>
                    </CardBody>
                    <center><CardImg src={unitImage.detail5} style={imageSize} /></center>
                </Card>
            </React.Fragment>
        )
    }

    if(!unitEvo.evo5awk){
        return (
            <React.Fragment>
                <Card style={unitCard}>
                    <CardTitle>
                        <h3><center>This unit has reached max evolution</center></h3>
                    </CardTitle>
                    <CardBody>
                        <center>{lore}</center>
                    </CardBody>
                    <center><CardImg src={unitImage.detail5} style={imageSize} /></center>
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo5awk.mat5) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat4} style={thumbnailSize} id="hover4"/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat5} style={thumbnailSize} id="hover5"/></center></th>
                                            <Tooltip isOpen={tooltip3} 
                                                target="hover3"
                                                placement="top"
                                                toggle={() => setTooltip3(!tooltip3)} >{unitEvo.evo5awk.hover3}</Tooltip>
                                            <Tooltip isOpen={tooltip4} 
                                                target="hover4"
                                                placement="top"
                                                toggle={() => setTooltip4(!tooltip4)} >{unitEvo.evo5awk.hover4}</Tooltip>
                                            <Tooltip isOpen={tooltip5} 
                                                target="hover5"
                                                placement="top"
                                                toggle={() => setTooltip5(!tooltip5)} >{unitEvo.evo5awk.hover5}</Tooltip>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo5awk.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat4amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat5amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail5} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

    if(unitEvo.evo5awk.mat4) {
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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></center></th>
                                            <th><center><Media src={unitEvo.evo5awk.mat4} style={thumbnailSize} id="hover4"/></center></th>
                                            <Tooltip isOpen={tooltip3} 
                                                target="hover3"
                                                placement="top"
                                                toggle={() => setTooltip3(!tooltip3)} >{unitEvo.evo5awk.hover3}</Tooltip>
                                            <Tooltip isOpen={tooltip4} 
                                                target="hover4"
                                                placement="top"
                                                toggle={() => setTooltip4(!tooltip4)} >{unitEvo.evo5awk.hover4}</Tooltip>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evo5awk.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat3amt}</center></td>
                                            <td><center>X{unitEvo.evo5awk.mat4amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detail5} style={imageSize} /></center>     
                </Card>
            </React.Fragment>
        )
    }

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
                            <h3>
                                <Table>
                                    <tr>
                                        <th><center><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></center></th>
                                        <th><center><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></center></th>
                                        <th><center><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></center></th>
                                        <Tooltip isOpen={tooltip3} 
                                                target="hover3"
                                                placement="top"
                                                toggle={() => setTooltip3(!tooltip3)} >{unitEvo.evo5awk.hover3}</Tooltip>
                                    </tr>
                                    <tr>
                                        <td><center>X{unitEvo.evo5awk.mat1amt}</center></td>
                                        <td><center>X{unitEvo.evo5awk.mat2amt}</center></td>
                                        <td><center>X{unitEvo.evo5awk.mat3amt}</center></td>
                                    </tr>
                                </Table>
                            </h3>
                            </CardBody>
                        </Card>
                    </center>
                </CardTitle>
                <CardBody>
                    <CardText>
                        <center>{lore}</center>
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail5} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )



}

export function RenderAwaken({lore, unitImage, unitEvo}) {
    const [tooltip1, setTooltip1] = useState(false);
    const [tooltip2, setTooltip2] = useState(false);
    const [tooltip3, setTooltip3] = useState(false);

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
                                <h3>
                                    <Table>
                                        <tr>
                                            <th><center><Media src={unitEvo.evoawksuper.mat1} style={thumbnailSize} id="hover1"/></center></th>
                                            <th><center><Media src={unitEvo.evoawksuper.mat2} style={thumbnailSize} id="hover2"/></center></th>
                                            <th><center><Media src={unitEvo.evoawksuper.mat3} style={thumbnailSize} id="hover3"/></center></th>
                                            <Tooltip isOpen={tooltip1} 
                                                    target="hover1"
                                                    placement="top"
                                                    toggle={() => setTooltip1(!tooltip1)} >{unitEvo.evoawksuper.hover1}</Tooltip>
                                            <Tooltip isOpen={tooltip2} 
                                                    target="hover2"
                                                    placement="top"
                                                    toggle={() => setTooltip2(!tooltip2)} >{unitEvo.evoawksuper.hover2}</Tooltip>
                                            <Tooltip isOpen={tooltip3} 
                                                    target="hover3"
                                                    placement="top"
                                                    toggle={() => setTooltip3(!tooltip3)} >{unitEvo.evoawksuper.hover3}</Tooltip>
                                        </tr>
                                        <tr>
                                            <td><center>X{unitEvo.evoawksuper.mat1amt}</center></td>
                                            <td><center>X{unitEvo.evoawksuper.mat2amt}</center></td>
                                            <td><center>X{unitEvo.evoawksuper.mat3amt}</center></td>
                                        </tr>
                                    </Table>
                                </h3>
                                </CardBody>
                            </Card>
                        </center>
                        
                    </CardTitle>
                    <CardBody>
                        <CardText>
                            <center>{lore}</center>
                        </CardText>
                    </CardBody>
                    <center><CardImg src={unitImage.detailawk} style={imageSize} /></center>     
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
                    <center><CardImg src={unitImage.detailawk} style={imageSize} /></center>
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
                    <h3><center>This unit has reached max evolution</center></h3>
                </CardTitle>
                <CardBody>
                    <center>{lore}</center>
                </CardBody>
                <center><CardImg src={unitImage.detailsuper} style={imageSize} /></center>
            </Card>
        </React.Fragment>
    )
}