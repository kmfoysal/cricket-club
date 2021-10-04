import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        
        <div>
            <div className='hero-bg'>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col className='d-flex justify-content-end align-items-center vh-100'>
                        <div className='text-end'>
                            <h2>The Cricket Club And Academy</h2>
                            <Button variant="outline-warning" size="lg" className='px-5'>LEARN MORE</Button>
                        </div>
                        </Col>
                    </Row>
                </Container>    
            </div>
            <Container className='py-5'>
                <Row>
                    <h2 className='w-50'>Our cricket club offers top-notch services</h2>
                </Row>
            </Container>
        </div>
    );
};

export default Home;