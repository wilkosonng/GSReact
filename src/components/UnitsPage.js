import React, { Component } from 'react';
import { Media } from 'reactstrap';

function Units (props) {
    
    const units = props.units.map(unitInfo => {
        return (
            <div className="col" key={unitInfo.id}>
                <RenderThumbnails units={unitInfo} />
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {units}
                </div>
            </div>
        </div>
    );
        

}

function RenderThumbnails ({units}) {
    if(units) {
        return (
            <Media src={units.image.thumbawk} alt={units.name} width="75" height="75" />
        );
    }
    else {
        return (
            <div />
        );
    }
}

export default Units;