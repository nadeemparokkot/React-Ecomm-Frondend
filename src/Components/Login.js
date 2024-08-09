import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login.css'; // Import your custom CSS file

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SetData = async (e) => {
        e.preventDefault();

        const res = await fetch('/userLogin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.status === 201) {
            window.alert("Login Successful");
            localStorage.setItem('token', data.token);
            navigate('/'); 
        } else {
            window.alert("Invalid Credentials");
        }
    };

    return (
        <section className="login-section">
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                        <div className="login-card">
                            <h2 className="login-heading">Login</h2>
                            <form onSubmit={SetData}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your Password"
                                        required
                                    />
                                </div>

                                <NavLink to='/register' className="register-link">Didn't Register? Register here!</NavLink><br /><br />
                                <button
                                    type="submit"
                                    className="btn btn-custom"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
