import React, {useCallback, useEffect, useRef} from "react";
import { Container, Form, Button } from 'react-bootstrap';
import axios from "axios";
import CONSTANTS from "../../Constants";
import {useHistory} from "react-router-dom";    // for redirecting
import BranchNavBar from '../BranchNavBar';

const AddBranch = () => {
    const history = useHistory();
    const branchNameInputElement = useRef();
    const branchLocationInputElement = useRef();
    const branchContactInputElement = useRef();
    const branchIdInputElement = useRef();

    const handleSubmit = useCallback(  () => (event) => {
        event.preventDefault();

        const data = {
            name: branchNameInputElement.current?.value,
            location: branchLocationInputElement.current?.value,
            contact: branchContactInputElement.current?.value,
            branch_id: branchIdInputElement.current?.value
        }

        console.log(data);
        fetchData(data).then(() => {
            console.log("Success");
            history.push("/branch");
        }).catch(() => {
            console.log("Error");
        });

    });

    const fetchData = async(data)=>{
        const response = await axios.post(`${CONSTANTS.HOSTNAME}/api/branch/add-branch`, data);
        console.log(response);
    }

    return (
        <Container>
            <BranchNavBar/>
            <Container className="ContentArea">
                <Form onSubmit={handleSubmit()}>
                    <Form.Group className="mb-3" controlId="branch_name">
                        <Form.Label>Branch Name</Form.Label>
                        <Form.Control type="text" ref={branchNameInputElement} placeholder="Enter Branch Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="branch_location">
                        <Form.Label>Branch Location</Form.Label>
                        <Form.Control type="text" ref={branchLocationInputElement} placeholder="Enter Branch Location"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="branch_contact">
                        <Form.Label>Branch Contact</Form.Label>
                        <Form.Control type="text" ref={branchContactInputElement} placeholder="Enter Branch Contact"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="branch_id">
                        <Form.Label>Branch ID</Form.Label>
                        <Form.Control type="text" ref={branchIdInputElement} placeholder="Enter Branch Id"/>
                    </Form.Group>
                    <Button variant="success" type="submit" style={{margin: "1rem 1rem 0 0"}}>
                        ADD BRANCH
                    </Button>
                    <Button variant="danger" style={{margin: "1rem 1rem 0 0"}} onClick={()=> history.push("/branch")}>CANCEL</Button>
                </Form>
            </Container>
        </Container>
    );
}

export default AddBranch;