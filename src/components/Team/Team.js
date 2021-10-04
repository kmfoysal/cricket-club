import React from 'react';
import { Card } from 'react-bootstrap';
import './team.css';

const Team = (props) => {

    const {name,agr,role,profileImg} = props.team;

    return (
        <div>
        <Card className='text-center shadow py-4 my-3'>
            <Card.Img variant="" src= {profileImg} className='profile-img'/>
            <Card.Body>
                <Card.Title className='fs-5'>{name}</Card.Title>
                <Card.Text>{agr} Years Old</Card.Text>
                <Card.Title className='fs-6' style={{color:'orange'}}>{role}</Card.Title>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Team;