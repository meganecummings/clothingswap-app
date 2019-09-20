import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Internal Components
import './Login.css';
import { API_URL } from '../../../constants';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null, 
        currentUser: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;
        axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
            .then(response => {
                this.props.setCurrentUser(response.data.id);
                this.setState({ currentUser: response.data.id })
                this.props.history.push('/profile');
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: error.response.data.message })
            });
    };

    render() {
        return(
            <div className="container login">
                <h1>Login</h1>
                <Link className="exit-form" to="/">x</Link>
                <div className="row text-center">
                    {this.state.error}
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" name="email" placeholder="example@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" name="password" placeholder="Your Password" />
                        </div>
                        <button onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Login;
