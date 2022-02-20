import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Premiers() {
    return (
      <div style={{ background: "rgb(43, 49, 72)", padding: "5%", height: "100%", width: "100%"}}>
          <h2 style={{color: "white"}}>Premiers</h2>
       <Carousel indicators={false}  fade variant="dark">
  <Carousel.Item>
  <CardGroup  style={{display: "flex", gap: "2%", justifyContent: "space-around", height: "100%", width: "100%"}}>
        <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>
        


    </CardGroup>
        
</Carousel.Item>

  <Carousel.Item>
  <CardGroup  style={{display: "flex", gap: "2%", justifyContent: "space-around"}}>
  <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", background: "rgb(43, 49, 72)", border: "none",height: "100%", width: "100%"}}>
            <Card.Img variant="top" src="./Dieinagunfight.jpg" style={{height: "100%", borderRadius: "5%"}} />
            <Card.Body style={{height: "100%", width: "100%"}}>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Die In A Gun Fight</Card.Title>
            <Card.Text style={{color: "white"}}>
              English
            </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
  </Carousel.Item>



</Carousel>
      </div>
    );
  }
  
  export default Premiers;
  