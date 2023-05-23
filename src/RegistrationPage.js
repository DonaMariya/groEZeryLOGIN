import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleUsernameChange = (event) => {
setUsername(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
// hh
console.log('Registration form submitted:', username, email, password);
// nn
setUsername('');
setEmail('');
setPassword('');
};

return (
<div>
<Navbar bg="success" expand="lg">
<Navbar.Brand href="#home"><span style={{color:"white"}}>groEZery</span></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link as={Link} to="/HomePAge"><span style={{color:"white"}}>Home</span></Nav.Link>
<Nav.Link as={Link} to="/LoginPage"><span style={{color:"white"}}>Login</span></Nav.Link>
<Nav.Link as={Link} to="/RegistrationPage"><span style={{color:"white"}}>Register</span></Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
<br></br>

<Form onSubmit={handleSubmit}>
<Form.Group controlId="formUsername">
<Form.Label>Username</Form.Label>
<Form.Control
type="text"
placeholder="Enter your username"
value={username}
onChange={handleUsernameChange}
/>
</Form.Group>

<Form.Group controlId="formEmail">
<Form.Label>Email</Form.Label>
<Form.Control
type="email"
placeholder="Enter your email"
value={email}
onChange={handleEmailChange}
/>
</Form.Group>

<Form.Group controlId="formPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Enter your password"
value={password}
onChange={handlePasswordChange}
/>
</Form.Group>
<br></br>
<Button variant="success" type="submit">
Register
</Button>
</Form>
</div>
);
};

export default RegistrationPage;