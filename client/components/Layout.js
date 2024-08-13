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
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './Navigation';

export default function Layout(props){
  return (
    <>
    <Navigation /><br />
      <Container>
        <Row>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
}