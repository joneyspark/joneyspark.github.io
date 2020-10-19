import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './AdminServiceList.css';
const AdminServiceList = () => {

    const [adminServiceLists, setAdminServiceLists] = useState([]);
    const [serviceLists, setServiceLists] = useState([]);

    useEffect(()=>{
        fetch(API_URL + '/getAdminServiceLists')
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            setAdminServiceLists(result);
        })
        
    },[]);

    useEffect(()=>{
        fetch(API_URL + '/getServices')
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            setServiceLists(result);
        })
        
    },[]);

    const [handleStatus, setHandleStatus] = useState()

    const handleStatusOnChange = (e) => {
        console.log(e.target.value);
        const getStatusValue = e.target.value;
        setHandleStatus(Number(getStatusValue));
    }

    console.log("HandleStatus>>>>", handleStatus);


    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <div style={{height: '100vh', backgroundColor: '#F4F7FC'}}>
                            <div className="d-flex align-items-center justify-content-between" style={{backgroundColor: '#fff', padding: '20px'}}>
                                    <div>
                                        <h5 style={{marginLeft: '25px'}}>Services List</h5>
                                    </div>
                                    <div>
                                        <h5>{sessionStorage.getItem('name')}</h5>
                                    </div>
                            </div>

                            <div className="row" style={{margin: '2rem'}}>
                                <div className="col-md-12 custom-table">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email ID</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Project Details</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                adminServiceLists.map(adminServiceList => 
                                                    <tr key={adminServiceList._id}>
                                                        <td>{adminServiceList.name}</td>
                                                        <td>{adminServiceList.email}</td>
                                                        <td>
                                                            {
                                                                serviceLists.filter(service => service._id === adminServiceList.service).map( serviceName => {
                                                                    return serviceName.service
                                                                })
                                                            }
                                                        </td>
                                                        <td>{adminServiceList.projectdetails}</td>
                                                        <td>
                                                            <select className="" value={handleStatus} onChange={e => (e,handleStatusOnChange)}>
                                                                <option value="0">Pending</option>
                                                                <option value="1">Done</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default AdminServiceList;