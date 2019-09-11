import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Internal Components
import Home from '../pages/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import ItemsContainer from '../containers/ItemsContainer/ItemsContainer';


import Event from '../components/Events/Event';

const Routes = ({ setCurrentUser, displayPosts, displayEvents, getUserInfo, history, currentUser, profile, handleEventDelete, events, items }) => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={( props ) => (
            currentUser
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/login' render={(props) => 
                <Home {...props} login={props.match.path} setCurrentUser={setCurrentUser} {...history} /> } />
            <Route path='/register' render={(props) => 
                <Home {...props} register={props.match.path} />} />
            <Route path="/profile" render={(props) => 
                <ProfileContainer {...props} currentUser={currentUser} handleEventDelete={handleEventDelete} {...history}  profile={profile} user_id={props.match.params.user_id} />} />
            <Route path="/item/:item_id" render={(props) => 
                <ItemsContainer {...props} profile={profile} events={events} currentUser={currentUser} items={items} displayPosts={displayPosts} itemID={props.match.params.item_id}/>} />
            <Route exact path="/items" render={(props) => 
                <ItemsContainer profile={profile} {...props} events={events} items={items} currentUser={currentUser} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/items/new" render={(props) => 
                <ItemsContainer {...props} currentUser={currentUser} items={items} profile={profile} addItems={true} events={events} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/add_to_event/:item_id" render={(props) => 
                <ItemsContainer {...props} currentUser={currentUser} items={items} profile={profile} addToEvents={true} itemId={props.match.params.item_id} events={events} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/events" render={(props) => 
                <EventsContainer {...props} profile={profile} events={events} handleEventDelete={handleEventDelete} currentUser={currentUser} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/events/new" render={(props) => 
                <EventsContainer {...props} events={events} handleEventDelete={handleEventDelete} profile={profile} currentUser={currentUser} addEvent={true} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/events/send-invite" render={(props) => 
                <EventsContainer {...props} events={events} handleEventDelete={handleEventDelete} profile={profile} currentUser={currentUser} sendInvites={true} {...history} displayEvents={displayEvents} />  } />
            <Route path="/event/:event_id" render={(props) => 
                <EventsContainer {...props} handleEventDelete={handleEventDelete} profile={profile} currentUser={currentUser} events={events} displayPosts={displayPosts} eventID={props.match.params.event_id} goBack={props.goBack} />} />
            <Route path="/update_profile" render={(props) => 
                <ProfileContainer {...props} handleEventDelete={handleEventDelete} profile={profile} currentUser={currentUser} goBack={props.goBack} events={events} editProfile={true} />} />
            <Route path='*' render={() => <section><h2>Not Found</h2></section>} />
        </Switch>
    )
};    

export default withRouter(Routes);