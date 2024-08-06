// pages/index.js

import React, {useState, useEffect} from 'react';
import TeamCard from '../components/TeamCard';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/teams'); // Update this to your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        const teamsData = data.standings.entries.map(entry => entry.team);
        setTeams(teamsData);
        
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTeams();
  }, []);

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }
  return (
    <Container>
      <h1 className="my-4">NHL Teams</h1>
      <Row>
        {teams.map((team) => (
          <Col key={team.id} sm={12} md={6} lg={4} xl={3}>
            <TeamCard team={team} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Home;
