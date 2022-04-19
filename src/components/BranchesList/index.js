import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Form, Button, FormControl, Card } from 'react-bootstrap';
import axios from 'axios';
import CONSTANTS from '../../Constants';

const BranchesList = () => {

    const history = useHistory();
    const [data, setData] = useState(null);

    const [inputText, setInputText] = useState("");

    useEffect(() => {
        getTableData();
    }, []);

    const getTableData = async () => {
        try {
            const res = await axios.get(`${CONSTANTS.HOSTNAME}/api/branch/all`);
            setData(res.data);
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

    return(
        <Container className="BranchesList">
            <Row>
                <Form className="d-flex" style={{width: "60%", marginLeft: "20%"}}>
                    <FormControl
                        type="search"
                        placeholder="Branch Name"
                        className="me-2"
                        aria-label="Search"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <Button variant="outline-success"  onClick={handleSearch}>Search</Button>
                </Form>
            </Row>
            <hr/>
            <Row>
                {data?
                    data.map((item, i) => (
                        <Card key={i} style={{ width: '18rem', margin: '0.4rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <hr/>
                                <Card.Text>
                                    <b>ID: </b>{item.branch_id}<br/>
                                    <b>Location: </b><i>{item.location}</i>
                                </Card.Text>
                                <Link to="/branch" style={{textDecoration: "none"}}>Visit Branches</Link>
                            </Card.Body>
                        </Card>
                    )) : null}
                
            </Row>
        </Container>
    );
}

export default BranchesList;