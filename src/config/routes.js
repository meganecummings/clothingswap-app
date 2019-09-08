import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Internal Components
import Home from '../pages/Home/Home';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import EventsContainer from '../containers/EventsContainer/EventsContainer';


const Routes = ({ setCurrentUser, displayEvents, getUserInfo, history, currentUser }) => {

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
                <ProfileContainer {...props} currentUser={currentUser} {...history} slug={props.match.params.slug} user_id={props.match.params.user_id} getUserInfo={getUserInfo} />} />
            <Route path="/events" render={(props) => 
                <EventsContainer {...props} currentUser={currentUser} {...history}  getUserInfo={getUserInfo} displayEvents={displayEvents} />  } />
            <Route path="/events/new" render={(props) => 
                <EventsContainer {...props} currentUser={currentUser} {...history} addEvent={true} getUserInfo={getUserInfo} displayEvents={displayEvents} />  } />
            <Route path="/events/:event_id" render={(props) => 
                <EventsContainer {...props} currentUser={currentUser} getUserInfo={getUserInfo}  />} />
            <Route path='*' render={() => <section><h2>Not Found</h2></section>} />
        </Switch>
    )
};    

export default withRouter(Routes);