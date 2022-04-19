import {Navbar, Container, Nav, Form, Button, FormControl, Table} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import CONSTANTS from '../../Constants';

const Index = () => {

    const temp = [
        {
            id: '001',
            name: 'Name-001',
            location: 'Location-001',
            contact: '001001'
        },
        {
            id: '002',
            name: 'Name-002',
            location: 'Location-002',
            contact: '002002'
        },
    ];

    const history = useHistory();
    const [data, setData] = useState(null);

    useEffect(() => {
        //getTableData();
        setData(temp);
    }, []);

    const getTableData = async () => {
        try {
            const res = await axios.get(`${CONSTANTS.HOSTNAME}/api/branch/get-all-branches`);
            setData(res.data);
          } catch (err) {
              console.log(err);
          }
    }

    const handleSearch = () => {
        history.push("/search");
    }

    return (
        <Container className="ContentArea">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
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
                            (data)?
                            data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <Button variant="success" onClick={() => {history.push(`/branch/edit?id=${item.id}`)}}>
                                            EDIT
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => {history.push(`/branch/delete?id=${item.id}`)}}>
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
    );
}

export default Index;