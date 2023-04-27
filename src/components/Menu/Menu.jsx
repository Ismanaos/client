import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Menu.css';

function Menu({isMobile}) {


  var expand = 'false';

  return (
    <>
        <Navbar variant='dark' key={expand} bg="black" expand={expand} className="mb-3" id='my-custom"'  >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            {isMobile && <Navbar.Brand className="mx-auto" href="#">Construcción</Navbar.Brand>}
            <Navbar.Offcanvas
              style={{ backgroundColor: 'black', color: '#FFE6C7'}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  NombreApp
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">CONTACTO</Nav.Link>
                  <Nav.Link href="#action2">NOSOTROS</Nav.Link>
                  <NavDropdown
                    title="TRABAJO"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Albañileria</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Cañerias</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Pregunte por otros trabajos (Gas)
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Menu;