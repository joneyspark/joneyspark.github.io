import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Order from '../Order/Order';

const Dashboard = () => {
    let {id} = useParams()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    Content
                </div>
            </div>
        </div>
    );
};

export default Dashboard;