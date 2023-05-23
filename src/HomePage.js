import React from 'react';
import { Navbar, Nav, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
return (
<div>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"> groEZery</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link as={Link} to="/HomePage">Home</Nav.Link>
    <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>
    <Nav.Link as={Link} to="/RegistrationPage">Register</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>

    <Carousel>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="ghjhj.jpg"
    alt="First slide"
    />
    <Carousel.Caption>
    <h3>Welcome to Our groEZery</h3>
    <p>Explore.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="fdgfh.jpg"
    alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Shop.</h3>
    <p>We offer high-quality products</p>
    </Carousel.Caption>
    </Carousel.Item>
    {/*carousel items*/}
    </Carousel>

    <h2>Product Categories</h2>
    <div className="card-deck">
    <Card>
    <Card.Img variant="top" src="dttr.jpg" />
    <Card.Body>
    <Card.Title>Category 1</Card.Title>
    <Card.Text>
    Explore our collection of products.
    </Card.Text>
    <Button variant="primary">View Products</Button>
    </Card.Body>
    </Card>
    <Card>
    <Card.Img variant="top" src="tfth.jpg" />
    <Card.Body>
    <Card.Title>Category 2</Card.Title>
    <Card.Text>
    Find the perfect products.
    </Card.Text>
    <Button variant="primary">View Products</Button>
    </Card.Body>
    </Card>
    {/*category*/}
    </div>
</div>
);
};

export default HomePage;
