import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

const Dashboard = () => {

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTextInput">
                    <Form.Label>Branch Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Branch Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTextInput">
                    <Form.Label>Branch Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Branch Location"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTextInput">
                    <Form.Label>Branch Contact</Form.Label>
                    <Form.Control type="text" placeholder="Enter Branch Contact"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTextInput">
                    <Form.Label>Branch Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Branch Id"/>
                </Form.Group>
                <Button variant="success" type="submit">
                    ADD BRANCH
                </Button>
                <Button variant="danger">CANCEL</Button>
            </Form>
        </div>
    );
}




export default Dashboard;