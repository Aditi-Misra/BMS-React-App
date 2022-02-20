import './SliderImages.css';
import Carousel from 'react-bootstrap/Carousel'


function SliderImages() {
  return (
    <div>
   <Carousel indicators= {false} interval={2000} style={{height: "10%", width: "100%"}} fade variant="dark">
  <Carousel.Item style={{width: "100%"}}>
    <img 
      className="d-block w-100"
      src="./one.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="./two.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="./three.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

  <div>
  <img style={{padding: "5%"}}
      className="d-block w-100"
      src="./click image.png"
      alt="Default"
    />
  </div>
</div>
  );
}

export default SliderImages;
