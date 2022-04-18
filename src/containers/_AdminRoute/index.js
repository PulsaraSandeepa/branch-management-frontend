import React from 'react';
import {Route} from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Component {...props} />
            )}
        />
    );
    // return (
    //     <div>
    //         {/*<AdminPanelTitle />*/}
    //         {/*<Row>*/}
    //         {/*    <Col sm={1}>*/}
    //         {/*        <VerticalBar />*/}
    //         {/*    </Col>*/}
    //         {/*    <Col sm={11}>*/}
    //                 <Route  {...rest} render={props => (
    //                     <Component {...props} />
    //                 )}/>
    //         {/*    </Col>*/}
    //         {/*</Row>*/}
    //     </div>
    // )
}

export default AdminRoute;