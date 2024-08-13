import React from 'react';
import FavTeamCard from '@/components/FavTeamCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const FavouritePage = ({}) => {
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  const [events, setEvents] = useState([]);

  let logo1 = '';
  let logo2 = '';
  
  useEffect(() => {
      const fetchFavoriteTeams = async () => {
          try {
              const response = await fetch('https://nhl-stats-backend.vercel.app/api/favouriteteam', {
                  method: 'GET',
                });
                const data = await response.json();
                setFavoriteTeams(data);
            } catch (err) {
                console.error('Error fetching favourite teams:', err);
            }
        };
        
        fetchFavoriteTeams();
    }, []);
    
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                if (favoriteTeams.length === 0) {
                    console.error('No favorite teams available');
                    return;
                }
    
                console.log('Fetching events for team ID:', favoriteTeams[0].id);
    
                const response = await fetch(`https://nhl-api5.p.rapidapi.com/schedule-team?season=2023&teamId=${favoriteTeams[0].id}`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'eefbd83667msh07bc10831bc5508p1bb942jsn3715de833f51',
                        'X-RapidAPI-Host': 'nhl-api5.p.rapidapi.com'
                    }
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log('API response data:', data);
    
                const slicedEvents = (data.events || []).slice(0, 3);
                console.log('Sliced events:', slicedEvents);
    
                setEvents(slicedEvents);
            } catch (err) {
                console.error('Error fetching favourite teams:', err);
            }
        };
    
        fetchEvents();
    }, [favoriteTeams]);


    const formatDate = (dateString) => {
        // Array of month names
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // Extract the month and date from the date string
        const monthIndex = parseInt(dateString.substring(5, 7), 10) - 1;
        const day = dateString.substring(8, 10);
        // Get the month name from the array
        const monthName = monthNames[monthIndex];
        return `${monthName} ${day}`;
    };

    const formatTime = (dateString) => {
        // Parse the date string into a Date object
        const date = new Date(dateString);
        // Format the time in the local format
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    console.log(favoriteTeams);
    console.log(events);

    return (
        <Container>

            <Row style={{color: 'white', textAlign: 'center'}}>
                {events && events.map((event) => (
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '1px solid white', padding: '10px', marginBottom: '10px'}}>
                        <h1>
                                <img src={event.competitions[0].competitors[0].team.logos ? event.competitions[0].competitors[0].team.logos[0].href : 'no logos'} alt="No Logo ;/" style={{ width: '50px', height: '50px' }}/> vs <img src={event.competitions[0].competitors[1].team.logos ? event.competitions[0].competitors[1].team.logos[0].href : 'no logos'} alt="No Logo ;/" style={{ width: '50px', height: '50px' }}/>
                        </h1>
                        <h3>{formatDate(event.date)}</h3>
                        <p>{formatTime(event.date)}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            <h1 style={{color: 'white', textAlign: 'center', textShadow: "-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black"}}>Your Favourite Teams</h1> <br /> <br />

            <Row>
                {favoriteTeams && favoriteTeams.map((team) => (
                    <Col key={team.id} sm={12} md={6} lg={3} xl={4}>
                        <FavTeamCard team={team} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FavouritePage;