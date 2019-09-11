import React, { Component } from 'react';

// Internal COmponents
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';
import clothes_rack from './clothes_rack.jpg';
import Contact from '../../components/Contact/Contact';
import amazing_prices from './amazing_prices.jpg';
import environment_help from './environment_help.jpg';
import clothes_on_ground from './clothes_on_ground.jpg';


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
                <h2 className="slogan">swap, don't shop.</h2>    
                </div>
                {this.props.login && <Login setCurrentUser={this.props.setCurrentUser} history={this.props.history} /> }
                {this.props.register && <Register history={this.props.history} /> }
                <Contact />
            </div>
        )
    }
}

export default Home;
