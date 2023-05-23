import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
return (
<div>
<Navbar bg="success" expand="lg">
<Navbar.Brand href="#home"> <span style={{color:"white"}}>groEZery</span></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link as={Link} to="/HomePage"><span style={{color:"white"}}>Home</span></Nav.Link>
<Nav.Link as={Link} to="/LoginPage"><span style={{color:"white"}}>Login</span></Nav.Link>
<Nav.Link as={Link} to="/RegistrationPage"><span style={{color:"white"}}>Register</span></Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>

<Form>
<Form.Group controlId="formUsername">
<Form.Label>Username</Form.Label>
<Form.Control type="text" placeholder="Enter your username" />
</Form.Group>

<Form.Group controlId="formPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Enter your password" />
</Form.Group>

<br></br>
<Button variant="success" type="submit">
Login
</Button>
</Form>
</div>
);
};

export default LoginPage;

