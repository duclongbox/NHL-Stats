/*****************************************************************************
* WEB422 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name: Amir Mullagaliev, Duc Long Hoang
* Student IDs: 128102225, 122702228
* Date: 08/13/2024
*****************************************************************************/
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import { readToken, removeToken } from "@/lib/authenticate";

export default function Navigation(props) {

  const router = useRouter();
  let token = readToken();

  function logout() {
    removeToken();
    router.push("/");
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior><Navbar.Brand style={{color: "white"}}>NHL Team {token && <>- Welcome, {token.username}!</>}</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior ><Nav.Link style={{color: "white"}}>Home</Nav.Link></Link>
            {token && <Link href="/favourite" passHref legacyBehavior><Nav.Link style={{color: "white"}}>Favourite</Nav.Link></Link>}
          </Nav>
          <Nav className="ml-auto">
            {!token && <Link href="/login" passHref legacyBehavior><Nav.Link style={{color: "white"}}>Login</Nav.Link></Link>}
            {token && <Nav.Link onClick={logout} style={{color: "white"}}>Logout</Nav.Link>}
          </Nav>
          <Nav className="ml-auto">
            {!token && <Link href="/register" passHref legacyBehavior ><Nav.Link style={{color: "white"}}>Register</Nav.Link></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}