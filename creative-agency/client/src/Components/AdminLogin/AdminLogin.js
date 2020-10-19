import React from 'react';
import { useForm } from "react-hook-form";
const commonBtn = {
    backgroundColor: '#111430',
    color: '#fff',
    padding: '7px 40px',
    display: 'inline-block',
    border: 'none',
    borderRadius: '5px',
    width: '200px'
}


const AdminLogin = () => {

    const { register, label, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <section className="admin-login-section">
            <div className="container">
                <div className="row d-flex align-items-center" style={{height: '100vh'}}>
                    <div className="col-md-6 offset-md-3">
                    <div className="loginlogo text-center p-5" style={{width: '100%'}}>
                    <img className="img-fluid text-center" width="180" src={process.env.PUBLIC_URL + '/images/logos/logo.png'} alt="" />
                    </div>
                        <div className="card text-center " style={{padding: '80px 0'}}>
                            <h4>Admin Login</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="m-5">
                                <input name="email" className="form-control mb-4" placeholder="Email" ref={register({ pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
                                <small>{errors.email && <span>Use a email address</span>}</small>
                                <input name="password" className="form-control mb-4" placeholder="Password" type="password" ref={register({ required: true, minLength: 6 })} />
                                <small>{errors.password && <span>Min Length 6</span>}</small>
                                <button className="btn btn-primary common-btn form-control float-left" style={commonBtn} type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;