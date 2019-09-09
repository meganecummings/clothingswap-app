import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Internal Components
import Home from '../pages/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import ItemsContainer from '../containers/ItemsContainer/ItemsContainer';


import Event from '../components/Events/Event';

const Routes = ({ setCurrentUser, displayPosts, displayEvents, getUserInfo, history, currentUser, profile }) => {

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
                <ProfileContainer {...props} currentUser={currentUser} {...history}  profile={profile} user_id={props.match.params.user_id} />} />
            <Route exact path="/items" render={(props) => 
                <ItemsContainer profile={profile} {...props} currentUser={currentUser} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/items/new" render={(props) => 
                <ItemsContainer {...props} currentUser={currentUser} profile={profile} addItems={true} {...history}  displayEvents={displayEvents} />  } />
            <Route exact path="/events" render={(props) => 
                <EventsContainer {...props} profile={profile} currentUser={currentUser} {...history} displayEvents={displayEvents} />  } />
            <Route exact path="/events/new" render={(props) => 
                <EventsContainer {...props} profile={profile} currentUser={currentUser} addEvent={true} {...history} displayEvents={displayEvents} />  } />
            <Route path="/event/:event_id" render={(props) => 
                <EventsContainer {...props} profile={profile} currentUser={currentUser} displayPosts={displayPosts} eventID={props.match.params.event_id}/>} />
            <Route path='*' render={() => <section><h2>Not Found</h2></section>} />
        </Switch>
    )
};    

export default withRouter(Routes);