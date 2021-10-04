import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Batch = (props) => {
    const {serviceName,description,servicePrice,coachName,batchTime,serviceImg} = props.service;
    return (
        <div>
            <Container>
                <Row className='g-0'>
                    <div className='d-flex rounded-3 shadow-lg my-4'>
                        <Col lg={3} className='p-0 m-0'>
                        <img src={serviceImg} alt="img" className='img-fluid rounded-3' />
                        </Col>
                        <Col lg={6} className='p-5 text-center'>
                            <h3 className='card-title'>{serviceName}</h3>
                            <p>{description}</p>
                        </Col>
                        <Col lg={3} className='text-center pt-4'>
                            <h6>{batchTime}</h6>
                            <p>With <strong className='text-danger'>{coachName}</strong></p>
                            <h6 className='mb-3'>START FROM ${servicePrice}</h6>
                            <button className='btn btn-outline-success px-5'>REGISTER</button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Batch;