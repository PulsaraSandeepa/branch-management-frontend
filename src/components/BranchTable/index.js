import {Container, Form, Button, FormControl, Table} from 'react-bootstrap';
import React, {useState, useEffect, useRef} from "react";
import {useHistory} from 'react-router-dom';
import CONSTANTS from '../../Constants';
import axios from "axios";
import BranchNavBar from '../BranchNavBar';

const BranchTable = () => {

    const history = useHistory();
    const [data, setData] = useState(null);
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        getTableData();
    }, []);

    const getTableData = async () => {
        try {
            const res = await axios.get(`${CONSTANTS.HOSTNAME}/api/branch/all`);
            // console.log(res.data);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${CONSTANTS.HOSTNAME}/api/branch/delete/${id}`);
            //console.log(res.data);
            getTableData();
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearch = async () => {
        //convert input text to lower case
        try {
            if (inputText === null || inputText === undefined || inputText === ''){
                getTableData();
            } else {
                const res = await axios.get(`${CONSTANTS.HOSTNAME}/api/branch/search/${inputText}`);
                // console.log(res.data);
                setData(res.data);
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <Container>
            <BranchNavBar/>
            <Container className="ContentArea">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Branch Name"
                        className="me-2"
                        aria-label="Search"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                </Form>
                <hr/>
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Branch ID</th>
                            <th>Branch Name</th>
                            <th>Contact Details</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            (data) ?
                                data.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.branch_id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.location}</td>
                                        <td>
                                            <Button variant="success" onClick={() => {
                                                history.push(`/branch/update/${item.branch_id}`)
                                            }}>
                                                EDIT
                                            </Button>{' '}
                                            <Button variant="danger" onClick={() => handleDelete(item.branch_id)}>
                                                DELETE
                                            </Button>
                                        </td>
                                    </tr>
                                )) : null
                        }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </Container>
    );
}

export default BranchTable;