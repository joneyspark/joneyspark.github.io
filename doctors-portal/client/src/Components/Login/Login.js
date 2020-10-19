import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
  
      console.log(data);
    }


    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                      <div className="form-group">
                        <input type="email" name="email" ref={register({required: true})} placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                      </div>
                      <div className="form-group">
                        <input type="text" name="password" ref={register({required: true})} placeholder="Password" className="form-control" />
                        {errors.password && <span className="text-danger">This field is required</span>}
                      </div>

                      <input className="btn btn-primary" type="submit" value="Login" />
                  </form>
                  <button className="btn btn-primary">Google Signin</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/images/loginimg.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;