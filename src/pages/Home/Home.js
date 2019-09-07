import React, { Component } from 'react';

// Internal COmponents
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';

class Home extends Component {
    image = [
        {
            url: "https://images.unsplash.com/photo-1484502249930-e1da807099a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
            alt: 'Clothing Rack'
        }
    ]
    
    state = {
        // index: 0,
    };

    render() {
        return (
            <div className="home-page">
                <div className="home-image container full-width clothing-image-bkground">
                    
                </div>
                {this.props.login && <Login setCurrentUser={this.props.setCurrentUser} history={this.props.history} /> }
                {this.props.register && <Register history={this.props.history} /> }
                <div className="main">
                    <section className="main-header centered high-z absolute half-screen full-width">
                        <h1 className="white">Haute Swap</h1>
                        <h2 className="white">swap don't shop</h2>
                    </section>
                </div>

            </div>
        )
    }
}

export default Home;
