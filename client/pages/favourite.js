import React from 'react';
import TeamCard from '@/components/TeamCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { FavoriteTeamsContext } from '@/components/FavoriteTeamsProvider';


const FavouritePage = ({}) => {
    return (
        <Container style={{backgroundColor: 'black'}}>
            <h1 style={{color: 'white', textAlign: 'center'}}>Team Schedule Expected here</h1> <br /> <br />

            <Row style={{color: 'white', textAlign: 'center'}}>
                <Col xs={4}>
                    1
                </Col>
                <Col xs={4}>
                    2    
                </Col>
                <Col xs={4}>
                    3
                </Col>
            </Row>
            <h1 style={{color: 'white', textAlign: 'center'}}>Your Favourite Teams</h1> <br /> <br />

            <Row>
                <Col>
                    <h1 style={{color: 'white', textAlign: 'center'}}>Team Cards Are Expected below</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default FavouritePage;