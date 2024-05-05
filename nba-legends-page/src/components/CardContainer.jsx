import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"
import {data} from "../helpers/data"
const CardContainer = () =>{
    return(
        <>
        <Form.Control
        placeholder="Seacrh a player"
        />
        <Container>
            <Row>
                {data.map((player,i)=>(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={player.img} />
                <Card.Footer>
                  <Card.Title>{player.name}</Card.Title>
                </Card.Footer>
              </Card>
          
            ))}

            </Row>
        </Container>
        </>
    )
}
export default CardContainer