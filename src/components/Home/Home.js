import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

    const [services] = useServices();
    
    
    const arrow = <FontAwesomeIcon icon={faLongArrowAltRight} />


    return (
        
        <div>
            <div className='hero-bg'>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col className='d-flex justify-content-end align-items-center vh-100'>
                        <div className='text-end'>
                            <h2>The Cricket Club And Academy</h2>
                            <NavLink to='/about'><Button variant="warning" size="lg" className='px-5'>LEARN MORE</Button></NavLink>
                        </div>
                        </Col>
                    </Row>
                </Container>    
            </div>
            <Container className='py-5'>
                <Row className='py-5'>
                    <h2 className='w-50 fs-1 mb-5'>Our cricket club offers top-notch services <span className='text-success'>{arrow}</span></h2>
                    <div className='display-service'>
                        {
                            services.map(service =>
                            <Service service={service}></Service>)
                        }
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;