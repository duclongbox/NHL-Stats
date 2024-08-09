import { Card, Form, Alert, Button } from "react-bootstrap";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register(props) {
  const [warning, setWarning] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5001/api/users/register`, {
        method: "POST",
        body: JSON.stringify({ username: user, password: password }), // Corrected 'userName' to 'username'
        headers: {
          "content-type": "application/json"
        }
      });

      if (!res.ok) {
        // Assuming the server returns a message in the JSON for errors
        const errorData = await res.json();
        throw new Error(errorData.msg); // Corrected 'message' to 'msg'
      }

      router.push("/login");
    } catch (err) {
      setWarning(err.message);
    }
  }

  return (
    <>
      <Card bg="dark">
        <Card.Body style={{color: 'white'}}>
          <h2>Register</h2>
          Create your account information below:
        </Card.Body>
      </Card>

      <br />

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{color: 'white'}}>User:</Form.Label>
          <Form.Control 
            type="text" 
            value={user} 
            id="username" // Updated id from 'userName' to 'username' to match the field name
            name="username" // Updated name from 'userName' to 'username'
            onChange={e => setUser(e.target.value)} 
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label style={{color: 'white'}}>Password:</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            id="password" 
            name="password" 
            onChange={e => setPassword(e.target.value)} 
          />
        </Form.Group>

        {warning && <>
          <br />
          <Alert variant='danger'>
            {warning}
          </Alert>
        </>}

        <br />
        <Button variant="dark" className="pull-right" type="submit">Register</Button>
      </Form>
    </>
  );
}
