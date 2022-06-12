import React, {useState, useContext} from 'react';
import '../styles/Default.css';
import '../styles/Work.css';
import { Card, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import WorkContext from '../contexts/workContext';
import WorkModal from './WorkModal';

function WorkCard()
{
    let [modal, setModal] = useState(false);
    let [modalData, setModalData] = useState(null);

    let workList = useContext(WorkContext);

    return(
        <>
        {
            workList.map( (work, i) => {
                return(
                    <Col lg={3} md={4} sm={6} className="mb-4 work-card" key={work.id}>
                        <Card className="p-0" onClick={()=>{setModal(true); setModalData(work);}}>
                            <span style={{backgroundImage: `url(${work.imageURL})`}} className="m-0"></span>
                            <div className="overlay">
                                <h6>{work.projectName}</h6>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </Card>
                    </Col>
                ); 
            } )
        }

        <WorkModal 
            show={modal} 
            hide={()=>{setModal(false)}} 
            title={modalData.projectName} 
            desc={modalData.projectDetails}
            tech={modalData.projectTechnologies}
            image={modalData.imageURL}
            github={modalData.githubURL}
            host={modalData.hostURL}
        />

        </>
    );
}

export default WorkCard;