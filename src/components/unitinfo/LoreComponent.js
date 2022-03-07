import React, { useState } from 'react';
import { Tooltip, Card, CardTitle, CardBody, CardText, CardImg, Media } from 'reactstrap'; 

const thumbnailSize = {
    maxHeight: 75,
    maxWidth: 75
};

const imageSize ={
    maxHeight: 500,
    maxWidth: 500
};

export function RenderTwoStar({lore, unitImage, unitEvo}) {
    if(unitEvo.evo23.mat5){
        return (
            <React.Fragment>
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat4} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat5} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat4amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat5amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat4} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat4amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo23.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo23.mat3} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo23.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo23.mat3amt}</center></td>
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
            <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                    <Card style={{backgroundColor: 'black'}}>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat4} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat5} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat4amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat5amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat4} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat4amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo34.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo34.mat3} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo34.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo34.mat3amt}</center></td>
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
            <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                    <Card style={{backgroundColor: 'black'}}>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat4} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat5} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat4amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat5amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat4} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat3amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat4amt}</center></td>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo45.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo45.mat3} style={thumbnailSize}/></th>
                                                    </tr>
                                                    <tr>
                                                        <td><center>X{unitEvo.evo45.mat1amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat2amt}</center></td>
                                                        <td><center>X{unitEvo.evo45.mat3amt}</center></td>
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
            <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                    <Card style={{backgroundColor: 'black'}}>
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

    if(unitEvo.evo5awk.mat5) {
        return (
            <React.Fragment>
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat4} style={thumbnailSize} id="hover4"/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat5} style={thumbnailSize} id="hover5"/></th>
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
                <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                        <Card style={{backgroundColor: 'black'}}>
                                            <CardBody>
                                            <h3>
                                                <table>
                                                    <tr>
                                                        <th><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></th>
                                                        <th><Media src={unitEvo.evo5awk.mat4} style={thumbnailSize} id="hover4"/></th>
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
            <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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
                                    <Card style={{backgroundColor: 'black'}}>
                                        <CardBody>
                                        <h3>
                                            <table>
                                                <tr>
                                                    <th><Media src={unitEvo.evo5awk.mat1} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo5awk.mat2} style={thumbnailSize}/></th>
                                                    <th><Media src={unitEvo.evo5awk.mat3} style={thumbnailSize} id="hover3"/></th>
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
                        <center>{lore}</center>
                    </CardText>
                </CardBody>
                <center><CardImg src={unitImage.detail5} style={imageSize} /></center>     
            </Card>
        </React.Fragment>
    )
}

export function RenderAwaken({lore, unitImage}) {
    return (
        <React.Fragment>
            <Card style={{backgroundColor: 'grey', borderColor:'grey'}}>
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