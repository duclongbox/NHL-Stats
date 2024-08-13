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
import { use, useEffect, useState } from 'react';
import fetchPlayers from '../public/code/players.js';
import React from 'react';
import { Modal, Table } from 'react-bootstrap';

function ModalDetailed({show, hide, teamID}) {
    const [players, setPlayers] = useState([]);

    let team = null;
    let logo = '';
    let teamName = null;
    let athletes = null;

    useEffect(() => {
        const fetchAndSetPlayers = async () => {
        const playersData = await fetchPlayers(teamID);
        setPlayers(playersData);
        }

        fetchAndSetPlayers();
    }, [setPlayers]);

    if (players.team) {
        team = players.team;
    }
    
    if (team) {
        logo = team.logos ? team.logos[0].href : 'no logo';
        teamName = team.displayName;
        athletes = team.athletes;
        // console.log(athletes);
    }

    return (
        <>
            <Modal className="dark-modal" show={show} onHide={hide} teamID={teamID} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {logo ? <img src={logo} alt="" style={{width: '50px', height: '50px', margin: '15px'}}/> : <p>No logo</p>}
                        <h3>{teamName}'s Roster</h3>
                    </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped border hover size="sm">  
                    <thead>
                        <tr style={{color: 'white'}}>
                            <th style={{borderRight: 'solid #dee2e6'}}>Player</th>
                            <th>#</th>
                            <th>Pos</th>
                            <th>Sh</th>
                            <th>Ht</th>
                            <th>Wt</th>
                            <th>Born</th>
                            <th>Bith Place</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {athletes && athletes.map((athlete, index) => {
                            if (athlete.birthPlace) {
                                // console.log(athlete.birthPlace);
                            }
                            return (
                            <tr key={athlete.id} style={{color: 'white'}}>
                                <td style={{color: 'white', borderRight: 'solid #dee2e6'}}>
                                <img 
                                    src={athlete.headshot ? athlete.headshot.href : ""} 
                                    onError={(e) => { e.target.onerror = null; e.target.src = ""; }}
                                    style={{width: '60px', height: '50px'}}
                                />
                                {athlete.displayName}</td>
                                <td style={{color: 'white'}}>{athlete.jersey}</td>
                                <td style={{color: 'white'}}>{athlete.position.abbreviation}</td>
                                <td style={{color: 'white'}}>{athlete.hand.type}</td>
                                <td style={{color: 'white'}}>{athlete.displayHeight}</td>
                                <td style={{color: 'white'}}>{athlete.displayWeight}</td>
                                <td style={{color: 'white'}}>{athlete.dateOfBirth.slice(0,-7)}</td>
                                <td style={{color: 'white'}}>{athlete.birthPlace ? athlete.birthPlace.city : 'N/A'}, {athlete.birthPlace ? athlete.birthPlace.country : 'N/A'}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )

}
export default ModalDetailed;