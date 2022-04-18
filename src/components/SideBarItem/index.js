import React from 'react';
import {useHistory } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";


const SideBarItem = (props) => {

    const history = useHistory();

    const handleClick = () => {
        history.push(props.item.link);
    }

    return(
        <div className="SidebarItem">
            <Container fluid>
                <Row style={{padding:"2rem"}}>                                  
                    <Container>
                        <button onClick={handleClick} style={{backgroundColor: "#EAEAEA", border: "none", fontWeight: "bold"}}>
                            {props.item.label}
                        </button>
                    </Container>                
                </Row>
            </Container>
        </div>
    );
}

export default SideBarItem;