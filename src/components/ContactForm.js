import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import formValidate from '../validations/formValidate';
import {useButtonColorRemover} from '../custom_hooks/useButtonColorRemover';


function ContactForm()
{
    useButtonColorRemover();

    let initialFormValues = {firstName: "", lastName: "", email: "", message: ""}
    let [formValues, setFormValues] = useState(initialFormValues);

    function formValuesChange(event)
    {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setFormValues( (lastValue)=>{
            if(fieldName === "first_name")
            {
                return { firstName: fieldValue, lastName: lastValue.lastName, email: lastValue.email, message: lastValue.message}
            }
            else if(fieldName === "last_name")
            {
                return { firstName: lastValue.firstName, lastName: fieldValue, email: lastValue.email, message: lastValue.message}
            }
            else if(fieldName === "email")
            {
                return { firstName: lastValue.firstName, lastName: lastValue.lastName, email: fieldValue, message: lastValue.message}
            }
            else if(fieldName === "message")
            {
                return { firstName: lastValue.firstName, lastName: lastValue.lastName, email: lastValue.email, message: fieldValue}
            }
        } )
    }

    function formSubmit(event)
    {
        event.preventDefault();
        
        if(formValidate(formValues) == true)
        {
            event.reset();
        }
    }

    return(
        <Form className="contact-form" onSubmit={(event)=>formSubmit(event)}>

        <Row className="mb-md-2">
            <Col md={6} className="mb-2 mb-md-0">
                <Form.Group>
                    <Form.Label htmlFor="user_first_name">First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        id="user_first_name"
                        placeholder="Enter your first name"
                        name="first_name"
                        onChange={
                            (event)=>{
                                formValuesChange(event);
                            }
                        }
                    />
                    <Form.Text>Error Message</Form.Text>
                </Form.Group>
            </Col>

            <Col md={6} className="mb-2 mb-md-0">
                <Form.Group>
                    <Form.Label htmlFor="user_last_name">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="user_last_name"
                        placeholder="Enter your last name"
                        name="last_name"
                        onChange={(event)=>formValuesChange(event)}
                    />
                    <Form.Text>Error Message</Form.Text>
                </Form.Group>
            </Col>
        </Row>

        <Row className="mb-2">
            <Col>
                <Form.Group >
                    <Form.Label htmlFor="user_email">Email</Form.Label>
                    <Form.Control
                        type="text"
                        id="user_email"
                        placeholder="Enter your email address"
                        name="email"
                        onChange={(event)=>formValuesChange(event)}
                    />
                    <Form.Text>Error Message</Form.Text>
                </Form.Group>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="user_message">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        id="user_message"
                        placeholder="Enter your message here"
                        name="message"
                        onChange={(event)=>formValuesChange(event)}
                    />
                    <Form.Text>Error Message</Form.Text>
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
                <Button type="submit" className="main-btn primary-btn w-100 submit-btn">Submit</Button>
            </Col>
        </Row>

    </Form>        
    );
}

export default ContactForm;