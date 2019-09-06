import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Internal Components
import Home from '../pages/Home/Home';


const Routes = ({ setCurrentUser, history, currentUser }) => {

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
            <Route path='/login' render={(props) => <Home {...props} login={props.match.path} setCurrentUser={setCurrentUser} {...history} /> } />
            <Route path='/register' render={(props) => <Home {...props} register={props.match.path} />} />
        </Switch>
    )
};    

export default withRouter(Routes);