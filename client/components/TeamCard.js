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
import React from 'react'
import { Card, Table, Button} from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react';
import ModalDetailed from './ModalDetailed';


function TeamCard({team}) {
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  const [showModal, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);
  
  const [players, setPlayers] = useState([]);

  const [isFavorited, setIsFavorited] = useState(false);

  const currTeam = team.team
  const stat = team.stats;
  const logoUrl = currTeam.logos ? currTeam.logos[0].href : 'no logo';
  const GP = stat ? stat[4].value : '';
  const W = stat ? stat[9].value : '';
  const L = stat ? stat[5].value : '';
  const PTS = stat ? stat[8].value : '';
  const OTL = stat ? stat[10].value : '';
  const OTW = stat ? stat[11].value : '';
  
  
    useEffect(() => {
      const fetchFavoriteTeams = async () => {
        try {
          const response = await fetch('https://nhl-stats-backend.vercel.app/api/favouriteteam', {
            method: 'GET',
          });
          const data = await response.json();
          setFavoriteTeams(data);
          setIsFavorited(data.some(favTeam => favTeam.id === currTeam.id));
        } catch (err) {
          console.error('Error fetching favourite teams:', err);
        }
      };
  
      fetchFavoriteTeams();
    }, []);
  
  

  

  console.log("list of favorite Teams: " + favoriteTeams);
  const toggleFavorite = async () => {
    if (isFavorited) {
      try {
        const response = await fetch(`https://nhl-stats-backend.vercel.app/api/favouriteteam/${currTeam.id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('HTTP error' + response.status);
        }

        console.log('Team removed from favourites');
        setIsFavorited(false);
      } catch (err) {
        console.error('Error removing team from favourites:', err);
      }
    } else {

      try {
        const response = await fetch(`https://nhl-stats-backend.vercel.app/api/favouriteteam`, {
          method: 'POST',
          body: JSON.stringify({id: currTeam.id, displayName: currTeam.displayName, logos: currTeam.logos, stats: team.stats}),
          headers: {
            "content-type": "application/json"
          },
        });

        if (!response.ok) {
          throw new Error('HTTP error' + response.status);
        }

        console.log('Team added to favourites');
        setIsFavorited(true);
      } catch (err) {
        console.error('Error adding team to favourites:', err);
      }
    }

  }

  console.log(favoriteTeams);


  return (
    <Card style={{ width: '18rem', margin: '1rem', backgroundColor: '#181818'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button variant="outline-dark"onClick={handleOpenModal}>
      {logoUrl !== 'no logo' ? 
          <Card.Img variant="top" src={logoUrl} alt={`${team.displayName} no logo`} style={{width: '50px', height: '50px', margin: '15px'}} /> 
          : 
          <p>No logo :/</p>
        }
        </Button>
        <Card.Title style={{textAlign: "center", color: 'white', paddingLeft: '15px', paddingRight: '5px'}}>{currTeam.displayName}</Card.Title>
      </div>
      <Card.Body>
        <Table striped border hover size="sm">
          <thead style={{fontSize: "large"}}>
            <tr>
              <td style={{borderRight: 'solid #dee2e6', textAlign: 'center', color: 'white'}}>GP</td>
              <td style={{color: "green", textAlign: 'center'}}>W</td>
              <td style={{color: "red", textAlign: 'center'}}>L</td>
              <td style={{color: "green", textAlign: 'center'}}>OTW</td>
              <td style={{color: "red", borderRight: '1px solid #dee2e6', textAlign: 'center'}}>OTL</td>
              <td style={{textAlign: 'center', color: 'white'}}>PTS</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{borderRight: 'solid #dee2e6', textAlign: 'center', color: 'white'}}>{GP}</td>
              <td style={{color: "green",textAlign: 'center'}}>{W}</td>
              <td style={{color: "red",textAlign: 'center'}}>{L}</td>
              <td style={{color: "green",textAlign: 'center'}}>{OTW}</td>
              <td style={{color: "red", borderRight: '1px solid #dee2e6',textAlign: 'center'}}>{OTL}</td>
              <td style={{color: 'white', paddingLeft: '10px'}}>{PTS}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="warning" onClick={toggleFavorite} style={{ padding: '5px', fontSize: '12px', height: '25px', paddingTop: '2px'}}>
          <p>{isFavorited ? '★' : '☆'}</p>
        </Button>
        <ModalDetailed show={showModal} hide={handleCloseModal} teamID={currTeam.id} />
      </Card.Body>
    </Card>
  )
}

export default TeamCard
