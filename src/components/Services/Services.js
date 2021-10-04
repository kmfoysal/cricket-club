import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import '../About/About.css';
import Batch from '../Batch/Batch';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='bg-light'>
            <div className='about-bg'>
                <Container>
                    <Row className='align-items-center' style={{height:'400px'}}>
                    <Col>
                        <h3>Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </Col>
                    </Row>
                </Container>
           </div>
            <div className='py-5'>
                <h3 className='fs-2 mb-5 text-center'>November 2021 Batch Schedule</h3>
            {
                services.map(service => <Batch service={service}></Batch>)
            }
            </div>
        </div>
    );
};

export default Services;