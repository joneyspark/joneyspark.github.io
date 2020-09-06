import React from 'react';
import { Nav, Navbar,  NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import logo from '../../images/logo.png';
const Header = () => {
    return (
        <>
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><img width="100" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/order-review">Review Order</Nav.Link>
                        <Nav.Link href="/manage-intentory">Manage Inventory</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    );
};

export default Header;