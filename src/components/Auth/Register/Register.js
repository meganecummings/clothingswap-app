import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Internal Components
import { API_URL } from '../../../constants';
import './Register.css';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        errors: [],
        text: '',
        shouldComponentDisplayErrors: false
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = this.state;
        axios.post(`${API_URL}/auth/register`, newUser)
            .then(response => {
                this.props.history.push('/login')
            })
            .catch(error => {
                const errors = error.response.data.errors;
                this.setState({ errors, shouldComponentDisplayErrors: true });
            })
    };

    render() {
        return(
            <div className="container register">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Register</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 offset-md-3">
                        {this.state.shouldComponentDisplayErrors && this.state.errors.map((error, index) => (
                            <div className="alert" role="alert" key={index}>{error.message}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>   
                        ))}
                    </div>
                </div>
                <Link className="exit-form" to="/">X</Link>
                <div className="row">
                    <div className="col-md-6 offset md-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Example@Email.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Your Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirm Your Password</label>
                                <input type="password2" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control" placeholder="Your Password"/>
                            </div>
                            <button type="submit" className="auth-btn submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Register;
