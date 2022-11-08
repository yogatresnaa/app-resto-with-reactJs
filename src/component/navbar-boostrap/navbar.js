import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaAlignRight,FaAlignLeft } from 'react-icons/fa';



 function HeaderNav () {
  const [ toggle, setToggle ] = React.useState(false);

  const toggleNav = () => {
      setToggle((prevToggle) => {
          return prevToggle === false ? true : false;
      });
    }
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
            <Container>
              <Navbar.Brand href="/" className='nav-boostrap'><h2>KpB</h2></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav}>
              {toggle === true ? <FaAlignLeft/> : <FaAlignRight/> }</Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">Profil</Nav.Link>
                    <NavDropdown title="Layanan" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/cafe">Cafe</NavDropdown.Item>
                      <NavDropdown.Item href="/resto">Restoran</NavDropdown.Item>
                      <NavDropdown.Item href="/aula">Aula Serbaguna</NavDropdown.Item>
                      <NavDropdown.Item href="/senam">Senam</NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link eventKey={2} href="#memes">Masuk</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">Daftar</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
   

    )
}

export default HeaderNav;