import React, { Component } from 'react';

// Internal COmponents
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';

class Home extends Component {
    state = {
        // index: 0,
    };

    render() {
        return (
            <div className="home-page">
                {this.props.login && <Login setCurrentUser={this.props.setCurrentUser} history={this.props.history} /> }
                {this.props.register && <Register history={this.props.history} /> }
                <div className="main">
                    <section className="main-header">
                        <h1>Haute Swap</h1>
                        <h3>swap don't shop</h3>
                    </section>
                </div>

            </div>
        )
    }
}

export default Home;
