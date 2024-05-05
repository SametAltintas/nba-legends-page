import Header from "./components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/esm/Container";
import CardContainer from "./components/CardContainer";
function App() {
  return (
    <Container className="text-center mt-4">
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
