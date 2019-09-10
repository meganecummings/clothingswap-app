import React, { Component } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

// Internal Components
import { API_URL } from '../../constants';
import Item from '../../components/Items/Item';
import ItemPosts from '../../components/ItemPosts/ItemPosts';
import { Link } from 'react-router-dom';
import './ItemsContainer.css';

class ItemsContainer extends Component {
    state = {
        items: null,
        posts: null,
        item: null,
        itemName: '',
        brand: '',
        size: '',
        category: '',
        quality: '',
        image : '',
        eventTitle: '',
        slug: '',
        eventTitle: ''
    };

    componentDidMount() {
        this.getItems();
    };


    componentDidMount() {
        if (this.props.itemID) this.getItem();
        else {
        this.getItems();
        }
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEdit = event => {
        event.preventDefault();
    }

    handleDelete = (event, id) => {
        event.preventDefault();
        console.log(id);
        this.deleteItem(event, id);
        this.getItems();
    };

    getItem = () => {
        axios.get(`${API_URL}/items/${this.props.itemID}`, { withCredentials:true })
            .then(response => {
                this.setState({ items: [response.data.data] })
            })
            .catch(error => console.log(error))
    };

    getItems = () => {
        axios.get(`${API_URL}/items`)
            .then(response => {
                this.setState({ items: response.data.data })
            })
            .catch(error => console.log(error))
    };

    submitItem = event => {
        event.preventDefault();
        const currentItems = this.state.items;
        axios.post(`${API_URL}/items/new`, {
            itemName: this.state.itemName,
            username: this.props.profile.data.username,
            brand: this.state.brand,
            size: this.state.size,
            category: this.state.category,
            quality: this.state.quality,
            image: this.state.image,
            eventTitle: this.state.eventTitle,
            slug: slugify(this.state.itemName),
        }, { withCredentials: true })
            .then(response => {
                console.log(currentItems)
                currentItems.push(response.data.data);
                this.setState({ items: currentItems });
                this.getItems();
                this.props.goBack();
            })
            .catch(error => {
                console.log(error);
            });    
    };

    updateItems = id => {
        let updatedItems = this.state.items.filter(item => item._id !== id);
        this.setState({ items: updatedItems });
    };

    deleteItem = (event, id) => {
        event.preventDefault();
        console.log(id);
        axios.delete(`${API_URL}/items/${id}/delete`)
            .then(response => {
                this.getItems();
                this.updateItems(id);
                this.props.goBack();
            })
            .catch(error => console.log(error.response));
    };

    displayItems = items => {
        console.log(items);
        return items.map(foundItem => (
            <div className="your-items-container border card" key={foundItem._id}>
                <Item item={foundItem} profile={this.props.profile} handleDelete={this.handleDelete} displayPosts={this.displayPosts} />
            </div>
        ));
    };

    render() {
        return (
            <div className="items-container">
                {this.props.deleteItem && 
                    <div>
                        <Link to='/items'> <button>Cancel</button> </Link>
                        <button onClick={this.deleteItem}>Delete</button>
                    </div>}

                <div className="item-posts">
                    {this.props.itemName &&
                        <ItemPosts
                            currentUser={this.props.currentUser}
                            items={this.state.items}
                            posts={this.state.posts}
                            postImage={this.state.profile.photo}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            profile={this.props.profile}
                        />}
                </div>

                <div className="items border">
                    <h2> Items </h2>
                    {this.state.items ?
                    <Link to={`/items/new`} className="add-btn">+</Link> : null }
                    {this.state.items ? this.displayItems(this.state.items) : <p> You Don't Have Any Items Yet. <a href={`/items/new`}> Add some Items! </a> </p>}
                </div>

                {this.props.addItems && 
                    <div className="add-item">
                        <Link className="exit-form" onClick={() => this.props.goBack()}>x</Link>
                        <form>
                            <h2>Add a New Item</h2>
                            <label>Item Name</label>
                            <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} />
                            <label>Brand</label>
                            <input id="add-item-brand" type="text" name="brand" value={this.state.brand} onChange={this.handleChange} />
                            <label>Size</label>
                            <input type="text" name="size" value={this.state.size} onChange={this.handleChange} />
                            <label>Category</label>
                            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                            <label>Description</label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                            <label>Quality of Item</label>
                            <input type="text" name="quality" value={this.state.quality} onChange={this.handleChange} />
                            <label>URL of Image</label>
                            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                            <button onClick={this.submitItem}>Submit</button>
                        </form>
                    </div>
                }
            </div>
        )
    };
};

export default ItemsContainer;
