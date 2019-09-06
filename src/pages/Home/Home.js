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
            <div className="home-page relative">
                <section className="home-image container absolute opacity full-width">
                    <img className="cover full-width light-padding"src={this.image[0].url} alt={this.image[0].alt}/>
                </section>
                {this.props.login && <Login setCurrentUser={this.props.setCurrentUser} history={this.props.history} /> }
                {this.props.register && <Register history={this.props.history} /> }
                <div className="main">
                    <section className="main-header centered high-z absolute half-screen full-width">
                        <h2 className="white-color">Haute Swap</h2>
                        <h3 className="white-color">swap don't shop</h3>
                    </section>
                </div>

            </div>
        )
    }
}

export default Home;
