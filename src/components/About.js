import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../styles/About.css';
import '../styles/Default.css';
import MyImage from '../assets/images/profile-pic.png';

function About()
{
    return(
        <section className="about" id="about">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>About ME</h2>
                        <h5>Who I Am?</h5>
                    </Col>
                </Row>

                <Row className="py-4 align-items-center">
                    <Col lg={6} className="text-center about-image">
                        <Image src={MyImage} width={300} fluid/>
                    </Col>

                    <Col lg={6} className="px-4 about-content mt-4 mt-lg-0">
                        <p className="mb-0" style={{textAlign: "justify"}}>
                        My name is Muhammad Ammad Hassan and I am based in Lahore, Pakistan. I have completed my graudation in Software Engineering from The University of Faisalabad.</p>

                        <q className="text-center d-block my-4">
                            <em className="">
                                It is my passion to code and I always love to develop beautiful websites.
                            </em>
                        </q>

                        <p className="mb-0" style={{textAlign: "justify"}}>
                        I have skills to create an attractive and user-friendly Frontend of the website. My goal is to become MERN Stack Developer and Cloud Computing Engineer. I have also interest in Flutter. I can easily work in groups/teams and always take part in the activities that enhances my knowledge and skills.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;