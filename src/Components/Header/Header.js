import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';





function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Location" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action4">Mumbai</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           Choose another city
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Register">Register</Nav.Link>
        
      </Nav>
      <Form style={{width: "50%", height: "0.5%"}} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
          className="me-2"
          aria-label="Search"
        />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png" style={{marginTop: "1%"}}  alt="" name="logo image" width="30" height="20" className="d-inline-block align-top" />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container fluid style={{background: "black", color: "white", display: "flex", justifyContent: "space-between"}}>
 <div style={{ padding: "1%"}}>
 {/* style={{marginLeft: "2%", marginRight}} */}
  <a style={{marginLeft: "2%", marginRight: "2%"}} onClick={()=>window.location.href="/movies"}>Movies</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Stream</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Events</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Plays</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Activities</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Buzz</a>
 </div>

 <div  style={{ marginRight: "2%", padding: "1%", display: "flex", flexDirection: "row-reverse" }}>
     <a style={{marginLeft: "2%", marginRight: "2%"}}>Offers</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>Corporates</a>
      <a style={{marginLeft: "2%", marginRight: "2%"}}>ListYourShow</a>
 </div>
</Container>
    </div>
  );
}

export default Header;
