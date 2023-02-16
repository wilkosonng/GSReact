import React from 'react'
import { Card, CardBody } from 'reactstrap'

const UnitReviews = ({ review }) => {
    return (
        <Card style={{  backgroundColor: "#202022", marginBottom: "1rem", padding: "0"}} >
            <CardBody style={{marginLeft: "10%", marginRight: "10%"}}>
                <i>{review}</i>
            </CardBody>
        </Card>
        
    )
}

export default UnitReviews