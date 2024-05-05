import React from 'react'
import Card from "react-bootstrap/Card"
const PlayerCard = ({img,name}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default PlayerCard