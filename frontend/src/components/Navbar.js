import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import authService from "./features/auth/authService";
import { useNavigate } from "react-router-dom";

function Navbars() {
 const navigate = useNavigate();
 const userLogout = () => {
  authService.logout();
  navigate("/");
 };

 let user = JSON.parse(localStorage.getItem('user'))

 if (!user) {
  return navigate("/");
 }

 return (
  <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
     {/* <Navbar.Brand href="/">
     </Navbar.Brand> */}
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       <Nav.Item className="text-white">User: {user.name}</Nav.Item>
      </Nav>
      <Nav>
       <Nav.Item
        style={{ color: "gray", cursor: "pointer" }}
        onClick={userLogout}
       >
        Sign out
       </Nav.Item>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
 );
}

export default Navbars;
