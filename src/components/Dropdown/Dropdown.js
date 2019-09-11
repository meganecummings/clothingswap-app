import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants';
import './Dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    };

    handleSubmit(event) {
        alert('Your Item is now linked to: ' + this.state.value);
        event.preventDefault();
        this.updateEvent();
        this.props.goBack();
    };

    updateEvent = () => {
        axios.put(`${API_URL}/events/${this.state.value}/update`, { items: this.props.item_id })
            .then(response => {
                console.log(response.data.data.items)})
            .catch(error => console.log(error));
    };

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    };

    render() {
        return(
            <form className="event-item-form" >
                <label>
                    Select the Event You'd like to add the Item to:
                    <Link className="exit-form" onClick={() => this.props.goBack()}>x</Link>
                    <select value={this.state.value} onChange={this.handleChange}> 
                        {this.props.events.map((event) => (
                            <option value={event._id} key={event._id}>{event.title}</option>
                        ))}
                    </select>
                    <button onClick={this.handleSubmit} > Submit</button>
                </label>
            </form>
        )
    }
};

export default Dropdown;