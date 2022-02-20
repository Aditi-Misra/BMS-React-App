import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./Movies.json";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function SingleMovie() {
    const {movid} = useParams();
    return(
        <div>
           <Container fluid style={{background: "e9ecef"}}>
            <Row style={{textAlign: "center", padding: "5%"}}>
        {data.map((mov) =>{

        if(mov._id==movid){
            return(
                <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom: "2%"}}>
                {/* borderTopLeftRadius: "5%", borderTopRightRadius: "5%" */}
                    <Card style={{borderRadius: "5%",height: "100%", width: "100%"}}>
                        <Card.Img variant="top" src={mov.image} style={{height: "100%", borderRadius: "5%"}} />
                        <Card.Body style={{height: "100%", width: "100%"}}>
                        <Card.Title style={{textAlign: "left", fontWeight: "bold", color: "black"}}>{mov.title}</Card.Title>
                        <Card.Text style={{textAlign: "left",color: "black"}}>
                        {mov.actor}
                        </Card.Text>
                        </Card.Body>
                     </Card>    
                </Col>   
            )}
            })}
                
            </Row>

           </Container>
        </div>
    );
}

export default SingleMovie;