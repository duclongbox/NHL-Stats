import React from 'react'
import { Card, Table, Button} from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react';
import fetchPlayers from '../public/code/players.js';
import ModalDetailed from './ModalDetailed';
import { FavoriteTeamsContext } from './FavoriteTeamsProvider';


function TeamCard({team}) {
  const { favoriteTeams, addTeamToFavorites, removeTeamFromFavorites } = useContext(FavoriteTeamsContext);

  const isFavorited = favoriteTeams.includes(team);

  const currTeam = team.team
  const stat = team.stats;
  const logoUrl = currTeam.logos ? currTeam.logos[0].href : 'no logo';
  const GP = stat ? stat[4].value : '';
  const W = stat ? stat[9].value : '';
  const L = stat ? stat[5].value : '';
  const PTS = stat ? stat[8].value : '';
  const OTL = stat ? stat[10].value : '';
  const OTW = stat ? stat[11].value : '';


  const toggleFavorite = async () => {
    if (isFavorited) {
      removeTeamFromFavorites(team);
    } else {
      addTeamToFavorites(team);

      try {
        const response = await fetch(`http://localhost:5001/api/favouriteTeam/favourite`, {
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
      } catch (err) {
        console.error('Error adding team to favourites:', err);
      }
    }

  }

  console.log(favoriteTeams);

  const [showModal, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  const [players, setPlayers] = useState([]);


  // useEffect(() => {
  //   const fetchAndSetPlayers = async () => {
  //     const playersData = await fetchPlayers(currTeam.id);
  //     setPlayers(playersData);
  //   }

  //   fetchAndSetPlayers();
  // }, [currTeam.id]);

  // console.log(players);

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
        <Card.Title style={{textAlign: "center", color: 'white'}}>{currTeam.displayName}</Card.Title>
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
              <td style={{color: 'white'}}>{PTS}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="warning" onClick={toggleFavorite} style={{ padding: '5px', fontSize: '12px', height: '25px'}}>
          <p>{isFavorited ? '★' : '☆'}</p>
        </Button>
      </Card.Body>
      <ModalDetailed show={showModal} hide={handleCloseModal} teamID={currTeam.id} />
    </Card>
  )
}

export default TeamCard
