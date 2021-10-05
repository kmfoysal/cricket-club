import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../About/About.css';

const NotFound = () => {
    return (
        <div>
            <div className='about-bg'>
                <Container>
                    <Row className='align-items-center' style={{height:'400px'}}>
                    <Col>
                        <h3>Page Not Found</h3>
                        <p className='fs-4 mb-5'>The page requested couldn't be found - this could be due to a spelling error in the URL or a removed page.</p>
                        <NavLink to='/home'><button className='btn btn-danger px-5 py-2'>GO BACK</button></NavLink>
                    </Col>
                    </Row>
                </Container>
           </div>
        </div>
    );
};

export default NotFound;