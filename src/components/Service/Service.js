import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const {serviceName, serviceImg, description, servicePrice} = props.service;
    return (
        
        <Card className='text-center shadow'>
            <Card.Img variant="top" src= {serviceImg}/>
            <Card.Body>
                <Card.Title className='fs-5'>{serviceName}</Card.Title>
                <Card.Text> {description}</Card.Text>
                <Card.Title className='fs-6 mb-3' style={{color:'orange'}}>START FROM ${servicePrice}</Card.Title>
                <NavLink to='/services'><button className='btn btn-warning mx-auto'>Learn More</button></NavLink>
            </Card.Body>
        </Card>
    );
};

export default Service;