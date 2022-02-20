import './CardSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function CardSlider() {
    return (
      <div fluid className='CarouselContainer' style={{ padding: "5%"}}>
          <h1 style={{marginBottom: "2%"}}>The Best of Entertainment</h1>
       <Carousel fade variant="dark">
  <Carousel.Item>
  <CardGroup style={{display: "flex", gap: "2%", justifyContent: "space-around"}}>
        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./pink box.webp" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
               
            </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./dotscorner.jpg" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                
            </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./flower.jpg" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
               
            </Card.ImgOverlay>
        </Card>
        
    </CardGroup >    
  </Carousel.Item>
  <Carousel.Item>
  <CardGroup style={{display: "flex", gap: "2%", justifyContent: "space-around"}}>
  <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    </CardGroup>    
  </Carousel.Item>


  <Carousel.Item>
  <CardGroup style={{display: "flex", gap: "2%", justifyContent: "space-around"}}>
  <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white" style={{height: "100%", width: "100%", borderRadius: "5%"}}>
            <Card.Img src="./logo192.png" alt="Card image" style={{height: "100%", width: "100%", borderRadius: "5%"}}/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    </CardGroup>    
  </Carousel.Item>



</Carousel>
      </div>
    );
  }
  
  export default CardSlider;
  