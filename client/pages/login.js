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

import { Card, Form, Alert, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { authenticateUser } from "@/lib/authenticate";
import { useRouter } from 'next/router';

export default function Login(props) {

  const [warning, setWarning] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      await authenticateUser(user, password);
      router.push("/");
    }catch(err){
     setWarning(err.message);
    }

  }

  return (
    <>
      <Card bg="dark">
        <Card.Body style={{color: "white"}}>
          <h2>Login</h2>
          Enter your login information below:
        </Card.Body>
      </Card>

      <br />

      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label style={{color: 'white'}}>User:</Form.Label>
          <Form.Control type="text" value={user} id="userName" name="userName" onChange={e => setUser(e.target.value)} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label style={{color: 'white'}}>Password:</Form.Label>
          <Form.Control type="password" value={password} id="password" name="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group  >

        {warning && <>
          <br />
          <Alert variant='danger'>
            {warning}
          </Alert>
        </>}

        <br />
        <Button variant="dark" className="pull-right" type="submit">Login</Button>
      </Form>
    </>
  );
}