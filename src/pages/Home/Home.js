import React, { Component } from 'react';

// Internal COmponents
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';
import clothes_rack from './clothes_rack.jpg';
import Contact from './components/Contact/Contact';
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
                    
                </div>
                {this.props.login && <Login setCurrentUser={this.props.setCurrentUser} history={this.props.history} /> }
                {this.props.register && <Register history={this.props.history} /> }
                <section>
                    <h2 className="header">Why Swap?</h2>

                    <div className="grid-wrapper articles">
                        <article className="col-third">
                            <img src={environment_help} alt="girl with leaf" />
                            <div>
                                <h3>Environmental Impact </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
                                <button>Read More</button>
                            </div>
                        </article>
                        <article className="col-third">
                            <img src={amazing_prices} alt="prices sign" />
                            <div>
                                <h3>Affordable Fashion</h3>
                                <p>Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.</p>
                                <button>Read More</button>
                            </div>
                        </article>
                        <article className="col-third">
                            <img src={clothes_on_ground} alt="stacks of clothing" />
                            <h3>More Fashion Reuse</h3>
                            <p>Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?</p>
                            <button>Read More</button>
                        </article>
                    </div>
                </section>
                <Contact />
            </div>
        )
    }
}

export default Home;
