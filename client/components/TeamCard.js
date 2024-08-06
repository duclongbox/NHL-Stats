import React from 'react'
import { Card} from 'react-bootstrap'
function TeamCard({team}) {
   const logoUrl = team.logos ? team.logos[0].href : '';
       
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
    <Card.Img variant="top" src={logoUrl} alt={`${team.displayName} no logo`} />
      <Card.Body>
        <Card.Title>{team.displayName}</Card.Title>
        <Card.Text>
          <strong>City:</strong> {team.city}<br />
          <strong>STATS:</strong> {team.abbreviation}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TeamCard
