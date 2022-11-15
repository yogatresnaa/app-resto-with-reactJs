import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiHome } from 'react-icons/bi'
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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav' fixed="top">
            <Container>
              <LinkContainer to ='/'><Navbar.Brand className='nav-boostrap'><h2><BiHome/><p>kampung Belang </p></h2></Navbar.Brand></LinkContainer>
              
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNav}>
              {toggle === true ? <FaAlignLeft/> : <FaAlignRight/> }</Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav >
                  <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                  <LinkContainer to='profil'><Nav.Link>Profil</Nav.Link></LinkContainer>
                    <NavDropdown title="Layanan" id="collasible-nav-dropdown">
                      <LinkContainer to="/cafe"><NavDropdown.Item>Cafe</NavDropdown.Item></LinkContainer>
                      <LinkContainer to='/resto'><NavDropdown.Item>Restoran</NavDropdown.Item></LinkContainer>
                      <LinkContainer to='/aula'><NavDropdown.Item>Aula Serbaguna</NavDropdown.Item></LinkContainer>
                      <LinkContainer to='/senam'><NavDropdown.Item>Senam</NavDropdown.Item></LinkContainer>
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