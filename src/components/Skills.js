import React, {useContext} from 'react';
import '../styles/Default.css';
import '../styles/Skills.css';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import SkillsContext from '../contexts/skillsContext';

function Skills()
{
    let skillsList = useContext(SkillsContext);

    return(
        <section className="skills" id="skills">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>My Skills</h2>
                        <h5>What I Know?</h5>
                    </Col>
                </Row>

                <Row className="py-4">
                {
                    skillsList.map( (skill, i) => {
                        return(
                        <Col lg={6} className="mt-4 px-4" key={i}>
                            <div className="skill-data d-flex justify-content-between">
                                <h3>{skill.skillName}</h3>
                                <h3>{`${skill.skillValue}%`}</h3>
                            </div>
                            <ProgressBar now={skill.skillValue} className="skill-progress" />
                        </Col>
                        );
                    } )
                }
                </Row>
            </Container>
        </section>
    );
}

export default Skills;