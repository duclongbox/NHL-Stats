// pages/index.js

import React, {useState, useEffect} from 'react';
import TeamCard from '../components/TeamCard';
import { Container, Row, Col, Alert, Pagination} from 'react-bootstrap';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://nhl-stats-backend.vercel.app/api/teams'); // Update this to your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        const teamsData = data.standings.entries.map(entry => entry);
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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeams = teams.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);
  const totalPages = Math.ceil(teams.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
      <Container>
      <h1 className="my-4" style={{ color: "white" }}>NHL Teams</h1>
      <Row>
        {currentTeams.map((team) => (
          <Col key={team.id} sm={12} md={6} lg={3} xl={4}>
            <TeamCard team={team} />
          </Col>
        ))}
      </Row>
      <Pagination>
        {[...Array(totalPages).keys()].map(number => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};


export default Home;
