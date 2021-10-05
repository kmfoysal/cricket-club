import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTeams from '../../hooks/useTeams';
import Team from '../Team/Team';
import './About.css';

const About = () => {
    const [teams] = useTeams();
    
    return (
        <div className='font-link'>
            <div className='about-bg'>
                <Container>
                    <Row className='align-items-center' style={{height:'400px'}}>
                    <Col>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </Col>
                    </Row>
                </Container>
           </div>
           <div className='py-5'>
               <Container className='py-5'>
                   <Row>
                       <Col>
                          <h4 className='fs-3 mb-4'>Our Mission</h4>
                          <p className='text-muted w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores dignissimos tenetur culpa tempore hic aperiam id, repellendus quas adipisci autem perferendis totam rerum ullam veniam quaerat reprehenderit corporis veritatis.</p>
                       </Col>
                       <Col>
                          <h4 className='fs-3 mb-4'>Our Vision</h4>
                          <p className='text-muted w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores dignissimos tenetur culpa tempore hic aperiam id, repellendus quas adipisci autem perferendis totam rerum ullam veniam quaerat reprehenderit corporis veritatis.</p>
                       </Col>
                   </Row>
               </Container>
           </div>
           <div className= 'bg-light py-5'>
               <Container className='py-5'>
                   <Row className='text-center'>
                       <h3 className='fs-1 mb-4'>Meet Our Team</h3>
                       <p className='lg-px-5 mb-4 text-muted w-50 mx-auto'>Repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendisat vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                       
                       <div>
                            <Col className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1'>
                                    {
                                        teams.map(team => <Team team={team}></Team>)
                                    }
                            </Col>
                       </div>
                       
                   </Row>
               </Container>
           </div>
        </div>
    );
};

export default About;