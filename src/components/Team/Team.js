import React from 'react';
import { Card } from 'react-bootstrap';
import './team.css';

const Team = (props) => {

    const {name,agr,role,profileImg} = props.team;

    return (
        <div>
        <Card className='text-center shadow py-4 my-4 mx-auto rounded-circle align-' style={{width:'300px',height:'300px'}}>
            <Card.Img variant="" src= {profileImg} className='profile-img'/>
            <Card.Body>
                <Card.Title className='fs-5 text-success'>{name}</Card.Title>
                <Card.Text>{agr} Years Old</Card.Text>
                <Card.Title className='fs-6 m-0' style={{color:'orange'}}>{role}</Card.Title>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Team;