import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Button  from "react-bootstrap/Button";
function Footer() {
    return (
      <div style={{background: "rgb(49, 48, 53)"}}>
        <Container style={{ color: "white"}}>
            <Row style={{padding: "3%"}}>
                <Col md={2}> List Your Show</Col>
                <Col md={6}>Got a show, event, activity or a great experience? Partner with us and get listed on BookMyShow</Col>
                <Col md={4} style={{display: "flex", flexDirection: "row-reverse"}}> <Button style={{background: "rgb(236, 94, 113)"}}>Contact Today</Button></Col>
            </Row>
            <Row style={{textAlign: "center", padding: "5%",  width: "100%"}}>
                <Col> Col1</Col>
                <Col>Col 2</Col>
                <Col>Col 3</Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Footer;
  