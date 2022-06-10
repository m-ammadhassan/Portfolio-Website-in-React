import React, {useContext} from 'react';
import { Col } from 'react-bootstrap';
import SkillsContext from '../contexts/skillsContext';

function SkillBars()
{
    let skillsList = useContext(SkillsContext);

    return(
        <>
            {
                skillsList.map( (skill, i) => {
                    return(
                    <Col lg={6} className="mt-4" key={i}>
                        <h2>{skill.skillName}</h2>
                    </Col>
                    );
                } )
            }
        </>
    );
}

export default SkillBars;