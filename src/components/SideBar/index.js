import React, { Fragment } from 'react';

import SideBarItem from '../SideBarItem';

const arr = [
    {
        label: 'Owner',
        link: '/'
    },
    {
        label: 'Owner',
        link: '/'
    },
    {
        label: 'Product',
        link: '/'
    },
    {
        label: 'Delivery',
        link: '/'
    },
    {
        label: 'Branch',
        link: '/branch'
    },
    {
        label: 'Feedback',
        link: '/'
    },
    {
        label: 'Stock',
        link: '/'
    },
    {
        label: 'Billing',
        link: '/'
    },
    {
        label: 'Customer',
        link: '/'
    },
    {
        label: 'Pharmacy',
        link: '/'
    }
];

const SideBar = () => {
    return(
        <div className="Sidebar">
            {(arr) ?
                arr.map((item, i) => (
                    <Fragment key={i}>
                        <SideBarItem item = {arr[i]} />
                    </Fragment>
                )) : null
            }
        </div>
    );
}

export default SideBar;