import {Navbar, Container, Nav, Form, Button, FormControl, Table} from 'react-bootstrap';
import React, {useEffect} from "react";

const Index = () => {
    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Branch Id</th>
                        <th>Branch Name</th>
                        <th>Contact Details</th>
                        <th>Location</th>
                        <th>Actions</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button variant="success">EDIT</Button>
                            <Button variant="danger">DELETE</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <Button variant="success">EDIT</Button>
                            <Button variant="danger">DELETE</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <Button variant="success">EDIT</Button>
                            <Button variant="danger">DELETE</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Index;