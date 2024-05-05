import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";
import {data} from "../helpers/data"
import Col from 'react-bootstrap/esm/Col';
import PlayerCard from './PlayerCard';
const CardContainer = () =>{
    return(
        <>
        <Form.Control
        placeholder="Seacrh a player"
        />
        <Container>
            <Row>
                {data.map((player,i)=>(
                <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player}/>
              </Col>
          
            ))}

            </Row>
        </Container>
        </>
    )
}
export default CardContainer