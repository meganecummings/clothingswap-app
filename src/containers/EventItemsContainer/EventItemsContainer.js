import React, { Component } from 'react';
import axios from 'axios';

// Internal Components
import EventItem from '../../components/EventItem/EventItem';
import { API_URL } from '../../constants';

class EventItemsContainer extends Component{
    state = {
        itemIDs: null,
        itemDetails: [],
    };

    componentWillMount = () => {
        this.setState({ itemIDs: this.props.items })
    };

    getItemInfo() {
        this.state.itemIDs.map((item) => {
            axios.get(`${API_URL}/items/${item}`)
                .then(response => {
                    this.setState({ item: {...response.data.data} })
                    this.displayEventItems();
                })
            .catch(error => console.log(error))
        })
    };

    displayEventItems() {
        return this.state.itemObj.map(foundItem => (
            <div className="your-items-container border card" key={foundItem._id}>
                <EventItem item={foundItem} profile={this.props.profile} />
            </div>
        ));
    };

    render() {
        return(
            <>
                {this.state.itemIDs && this.getItemInfo()}
            </>
        )
    }
};

export default EventItemsContainer;